# Anonym-Us by Privacy Bytes


#### Authors:
* Craig Wyse: Team & Coding Lead 
* Elizabeth Livingston: Security Lead 
* Trent Endresen: Software Engineering Lead 
* Dylan Morris: Code and Testing Lead
<br /><br />

# Project Report
## Executive Summary:
Anonym-Us seeks to provide a privacy solution that operates on users’ desktops. Services like anti-virus, anti-spyware and firewalls also operate at the desktop level, similar to Anonym-Us, however, these tools only provide solutions adequate for virus protection and system-level security. Outside of a very select few programs, there are not any programs that are readily available to tackle the privacy concerns of the modern user. Anonym-Us wants to fill that gap, and provide a fully-capable privacy management system.

Anonym-Us’ goal is to create a software solution to the modern user’s concern by creating a fully functional privacy control system. At the core of our system, privacy will revolve around fully-managed email accounts created within our service. These email accounts will allow users to shield their personal information from online services that the user wants to keep their personal information hidden from. The user’s private information will be stored within our system, and when creating online accounts, websites will be provided with randomized information.

The secondary function of our program will be the management and security of personal data and online information. Our software will handle user data such as cookies, public hostname information, and other personally identifiable information.

---
<br />

## Final vs. Initial Requirements
Our requirements did not change through the course of development.

The requirements are:

- Account Registration:
  - The User has the ability to create new user accounts.
- Randomized Email Addresses:
  - User account will include a disposable email address.
- Conceal Personal Information:
  - Shield users' personal information from websites.
- Personal Data Security:
  - Software will manage and secure personal information.
- Security Suite:
  - Software will provide a suite of tools like VPNs, privacy checkups, etc.
---
<br />

## Final vs Initial Timeline
Tasks completed on time:
- Project Plan, Kanban Board, Repository setup
- Base GUI
- Routing
- Registration
  
Tasks Completed Late:
- Database setup/hosting
- Email Server

Tasks Never Completed:
- Cookie management
- VPN
- Encryption
---
<br />

## Project Results vs Expectations:
Our Initial expectations for this project at the beginning of development looked promising in terms of timeline and completion. We were on track until we had to make platform changes for the database and email server. Finding a viable solution to hosting these 2 resources necessary for the project took more time and effort than initially thought. Due to limited financial resources, cloud hosting of both the database and Email/SMTP server using trial credits was not possible.

Once these challenges were overcome, the development of the software was able to move forward in a timely manner. Had we not encountered these issues we believe the project would have been completed on schedule and with close to full functionality.

---
<br />

## Software Evaluation:
Anonym-Us as a concept is feasible and useful. There are similar applications currently in use. Anonym-Us as it stands now still needs a ton of work to add in the various other features and get the main ones working. Due to the fact that it deals with personal information and security it wouldn’t be ready for production unless a legal expert were to be brought in to ensure proper compliance with regulations related to this kind of application. A full security evaluation and report would also need to be conducted before the software could be safely deployed.

---
<br />

## Work To Be Done:
- Complete email integration with UI
- Cookie Management
- VPN
- Encryption
- Full UI integration with security tools

# Manuals
## User/Administrator Manuals:
For Users:
- Connect to your mailbox at https://mail.anonym-us.org/SOGo/ and sign in with the credentials provided to you by an email administrator.
- Use your provided email account to sign up for services.
- Start up the Anonym-Us UI (detailed below in deployment/installation instructions) to interact with your accounts.

For Administrators:
- Assign email accounts at https://mail.anonym-us.org/, where you will provide users with email accounts and passwords.
---
<br />

## Deployment/Installation Instructions:
1) Navigate to https://github.com/dyl77/Anonym-us
2) Clone this repository into your local system
3) Navigate to the project
4) Within the project, go to the `./electron-ui/` directory
5) From `./electron-ui/` you will run the command `npm install` to install the necessary commands (this will require you have NPM installed)
6) After the installation is complete you can run the command `npm start`
7) A webpage should open in your default browser. If not, navigate to `localhost:3000`\
   **You're now running the Anonym-Us UI**
---
<br />

# Code and Scripts
## Source Code:
All source code is contained within this repository: https://github.com/dyl77/Anonym-us

---
<br />

## Database and Scripts:
Our database is hosted on Microsoft Azure at: anonym-us.mysql.database.azure.com \
Our project contains no scripts that are not within the source code



<!-- ### How to Start:
To begin the app in an electron shell navigate to the electron-ui directory and run the command in terminal "npm start" -->