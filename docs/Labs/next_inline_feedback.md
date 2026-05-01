# Next Inline Feedback

## Overview
A lightweight, drop-in React component that allows clients to click anywhere on a staging site and leave a floating comment or annotation. 

## The Problem
Client feedback during the QA and staging phases is often messy. Clients send emails with vague descriptions like "make the text below the picture bigger" or attach unstructured screenshots that developers have to decipher.

## The Solution
By dropping a `<FeedbackProvider>` at the root of a Next.js application, the entire UI becomes interactive for authenticated reviewers. They can click on any DOM element to attach a comment. 

## Key Features
- **Zero-Config Setup:** Similar to `next-inline-editor`, it should require minimal setup.
- **Context-Aware:** Captures exactly which component/DOM node the user clicked on, along with screen resolution and browser details.
- **Visual Annotations:** Draws a pin or bounding box around the commented element.
- **Integrations:** Syncs comments directly to GitHub Issues, Linear, or Vizon OS as actionable tasks with deep links back to the exact state on staging.
- **Screenshot Capture:** Automatically takes a snapshot of the viewport when the comment is submitted.

## Value Proposition
- **For Clients:** Intuitive, frictionless feedback process without leaving the browser or taking screenshots.
- **For Developers/Agencies:** Structured, actionable bug reports and feedback directly tied to the codebase. No more guessing what the client meant.

## Technical Implementation (Draft)
- Use React Context to wrap the application.
- Listen for global click events when "Review Mode" is toggled.
- Use `getBoundingClientRect()` to calculate coordinates.
- API route to securely proxy data to external issue trackers.
