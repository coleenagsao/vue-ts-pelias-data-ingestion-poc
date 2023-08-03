# Pelias Data Ingestion Proof of Concept (POC) UI

## Description
This Proof of Concept aims to test the feasibility of the flow of data ingestion for self-hosted Pelias: 

1. Form Interface Input
2. Pelias Document Model
3. ElasticSearch API POST/PUT Request

This aims to check if we can be able to replicate the pelias/csv-importer. We are able to ingest data in the pelias index, however it is not guaranteed to be 100% searchable. There is still something happening under the hood in the said csv-importer to guarantee searchability. 

## Technologies Used
![Vue.js](https://img.shields.io/badge/Vue.js-42b883?style=for-the-badge&logo=vue.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-2d79c7?style=for-the-badge&logo=typescript&logoColor=white)

## Installation
To run the project locally, follow these steps:

1. Clone this repository.
2. Navigate to the frontend directory: `cd frontend`
3. Install the dependencies: `npm install`. 
4. Do the same with the backend directory.
4. Make sure your Pelias is running in your machine.
5. Start the development server in the backend directory: `npm run dev`
6. Start the website in the frontend directory: `npm run serve`

Make sure you have self-hosted Pelias, Vue, and TS installed on your machine before proceeding with the installation.