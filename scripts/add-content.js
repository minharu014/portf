#!/usr/bin/env node

/**
 * Portfolio Management Script
 *
 * Usage:
 * node scripts/add-project.js
 *
 * This script helps you easily add new projects to your portfolio
 */

import fs from "fs";
import path from "path";
import { createInterface } from "readline";

const portfolioPath = "./src/data/portfolio.json";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function addProject() {
  console.log("🚀 Adding a new project to your portfolio...\n");

  const name = await question("Project name: ");
  const description = await question("Project description: ");
  const image = await question("Project image URL: ");
  const github = await question("GitHub repository URL (optional): ");
  const demo = await question("Live demo URL (optional): ");
  const featured = await question("Is this a featured project? (y/N): ");

  console.log('\nAdding tags... (type "done" when finished)');
  const tags = [];

  while (true) {
    const tagName = await question('Tag name (or "done"): ');
    if (tagName.toLowerCase() === "done") break;

    const tagColor = await question("Tag color (e.g., text-blue-500): ");
    tags.push({ name: tagName, color: tagColor });
  }

  // Generate ID from name
  const id = name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  const newProject = {
    id,
    name,
    description,
    tags,
    image,
    github: github || "",
    demo: demo || "",
    featured: featured.toLowerCase().startsWith("y"),
  };

  // Read existing portfolio data
  const portfolioData = JSON.parse(fs.readFileSync(portfolioPath, "utf8"));

  // Add new project
  portfolioData.projects.push(newProject);

  // Write back to file
  fs.writeFileSync(portfolioPath, JSON.stringify(portfolioData, null, 2));

  console.log(`\n✅ Project "${name}" added successfully!`);
  console.log("📝 You can edit it further in src/data/portfolio.json");

  rl.close();
}

async function addExperience() {
  console.log("💼 Adding a new experience to your portfolio...\n");

  const title = await question("Job title: ");
  const company = await question("Company name: ");
  const date = await question('Date (e.g., "2024 - Present"): ');
  const description = await question("Job description: ");
  const logo = await question("Company logo URL (optional): ");
  const current = await question("Is this your current job? (y/N): ");

  console.log('\nAdding skills... (type "done" when finished)');
  const skills = [];

  while (true) {
    const skill = await question('Skill (or "done"): ');
    if (skill.toLowerCase() === "done") break;
    skills.push(skill);
  }

  // Generate ID from company name
  const id = company
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  const newExperience = {
    id,
    title,
    company,
    logo: logo || "",
    date,
    description,
    skills,
    current: current.toLowerCase().startsWith("y"),
  };

  // Read existing portfolio data
  const portfolioData = JSON.parse(fs.readFileSync(portfolioPath, "utf8"));

  // Add new experience at the beginning (most recent first)
  portfolioData.experiences.unshift(newExperience);

  // Write back to file
  fs.writeFileSync(portfolioPath, JSON.stringify(portfolioData, null, 2));

  console.log(`\n✅ Experience at "${company}" added successfully!`);
  console.log("📝 You can edit it further in src/data/portfolio.json");

  rl.close();
}

async function main() {
  console.log("🎯 Portfolio Management Tool\n");
  console.log("1. Add a project");
  console.log("2. Add an experience");
  console.log("3. Exit\n");

  const choice = await question("What would you like to do? (1/2/3): ");

  switch (choice) {
    case "1":
      await addProject();
      break;
    case "2":
      await addExperience();
      break;
    case "3":
      console.log("👋 Goodbye!");
      rl.close();
      break;
    default:
      console.log("❌ Invalid choice");
      rl.close();
  }
}

main().catch(console.error);
