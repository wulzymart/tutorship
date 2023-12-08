# Tutorship

Enriching minds, developing skills: Tutorship, Learn today, Stand tomorrow

## Team:

Olawole Olawale Martins.
Has proficiency as a fullstack developer. Handles the frontend, including building of landing page, learners and tutors dashboard and part of backend logic including video conferencing and saving of videos
building authentication api,
Adekunle Adetunji.
Proficiency in implementing backend logic, Building of Api for the application, for user creation, session creation, video uploading==payment handling

## Technologies

NextJs for frontend development
other option is reactjs. Nextjs is chosen due to the ability for multipaged app and also better seo compatibility. React will be better for user dashboards since most client side logic will be available on app loading
Tailwind css. This takes a bulk of css manipulations away
Websockets. Web sockets wil, be used for video chatting and live video streaming
Nodejs. This will be used for, video streaming and calling microservice
fastapi. A relatively newer python web framework for the backend api.
alternatives flask and django. Fast api has the advantage of faster server speed, consuming lesser system resources, however flask and django are more robust and have advantage of a wider community
Postgres sql. Database

## Challenge statement

As learning has gone beyond the walls of a school and now individuals are keen to learn new skills. Most self taught and boot campers have learnt via online videos with minimal engagement with tutors and mentors.
With Tutorship, we will create a learning platform that fosters live interactions between learners and tutors, while old sessions are available on record, learners are always part of a realtime live learning session and have the opportunity to engage tutors and alsk ensure what is being taught is up to date.

## Risks

A potential technical risk could be ensuring seamless integration and synchronization of live video streaming with websockets, as real-time features can be challenging to implement smoothly.
Managing and scaling the backend infrastructure, especially when dealing with a growing user base, might pose challenges.
Ensuring the security of user data, especially in live sessions and recordings and also payment details

To address the risks, a lookup on resources for implementation of video calling applications amongst the vast community of javascript and nodejs developers being merged with upto date security measures including the use of ssl, and other measures to guarantee security, also proper testing will be done to ensure that bugs and security flaws are detected before app is released ti the public. To ensure scalability, scalable cloudbased hosting will be used, multiple servers and database with load balancers will be employed and server health will constantly be monitored to guarantee good uptime and data processing.

Non-technical risks in building this platform could include:

## Market Competition

Competition from existing or emerging platforms. We will conduct thorough market research to understand the landscape and differentiate our platform adding values not available on other platforms.

## User Adoption

We need to ensure that tutors and learners get proper information about our platform and find value in it. We will consider different marketing strategies and also offering incentives or promotions to attract and retain users.

## Regulatory Compliance

Staying compliant with educational regulations and data protection laws and enforcing them may be a risk. We wilk ensure we keep up to date with international and local ethics and regulations and also provide app policies and terms and conditions which will be available to users

## Financial Sustainability

Cost is always a major factor. Keeping the app alive will require funding. We will need to reach out to investors and sponsors, possibly there may be need for adsense as users grow and traffic increases

## User Experience and Feedback

Addressing user feedback and ensuring a positive user experience. Regularly we will collect feedback and make improvements based on user suggestions.

## Infrastructure

All services will have 2 main branches, the main and dev branches. The main branch will be used for CICD while the dev branch will be used for local testing purpose, all other branches for feature addition can be created by team members and will first be merged into the dev branch, when thorough testing is done and approved, then the dev branch will be merged into the main branch for changes to be deployed on the servers.
Every microservice development will have a team lead who will be authorised to approve and merge into the main and dev branches.
For testing purposes, mock data can be generated via various online platforms and seeded into the database

We will use puppet and fabric for automation of servers.

## Existing solutions

### Youtube

Youtube is a video hosting and streaming website,while we may use the services offered by youtube and also stream videos. We will offer learners and tutors live interactions

### Udemy, udacity, skill share

A popular platform udemy exists and a giant in the learning industry, while our platform may be similar, we will make a difference in fostering live meetings and interactions between tutors and learners

## Future considerations.

We plan to incorporate Tutorship into school management systems, to help promote remote learning in different schools, all over the world.

# To Run

Read the Readme's in the backend and client folders
