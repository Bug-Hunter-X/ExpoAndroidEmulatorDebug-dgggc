# Expo Android Emulator Failure: Vague Error Message

This repository demonstrates a bug encountered while using Expo CLI to start an Android emulator. The emulator fails to start with an uninformative error message, despite correct configuration of the Android SDK, NDK, and environment variables.  The solution involves checking for specific emulator-related issues and using verbose logging to diagnose the problem.

## Bug Report

The bug is described in `bug.js`.  It outlines the steps taken to set up the development environment and the error encountered when attempting to start the emulator.

## Solution

The solution is provided in `bugSolution.js` and includes:

1.  Detailed checks for common emulator issues (AVD configuration, system resources, hypervisor conflicts).
2.  Implementation of verbose logging to get more informative error messages from the emulator.

## How to Reproduce

1. Clone this repository.
2. Follow the instructions in `bug.js` to set up your development environment (this step is mostly for completeness and may not result in the exact same error if your setup is different).
3. Attempt to start the Android emulator using Expo CLI.
4. Observe the vague error message.
5. Follow the instructions in `bugSolution.js` to resolve the issue.