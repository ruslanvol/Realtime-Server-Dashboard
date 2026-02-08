**Real-time Server Management Dashboard (Full-Stack)**
A professional management interface for simulated server infrastructure. This project demonstrates a complete Full-Stack architecture, including a relational MySQL database, a RESTful Node.js API, and a React SPA with real-time state synchronization.

 **Tech Stack**
Frontend: React (SPA architecture), Material-UI for professional enterprise design.

Backend: Node.js, Express.js.

Database: MySQL (Relational schema with Foreign Keys).

Communication: REST API with asynchronous state updates.

 **Key Features**
Real-time Status Toggle: Update server status (Online/Offline) via POST requests. The UI updates only after a successful 200 OK response from the server, ensuring data integrity.

Dynamic Infrastructure View: Fetches and joins data from multiple tables to display server details along with their respective hosting providers (Microsoft, IBM, GoDaddy, DigitalOcean).

Advanced Filtering & Sorting:

Activity Filter: Toggle checkbox to view only active servers.

Chronological Sorting: One-click sorting to display the most recently created servers at the top.

**Database Architecture**
The system relies on a relational MySQL schema with two interconnected tables:

Servers Table: Stores ID, Name, IP, Hosting Company ID (FK), Status, and Creation Date.

Companies Table: Pre-defined hosting providers used for infrastructure categorization.

 **Project Structure**
/backend: Express server logic, MySQL connection, and API routes.

/frontend: React components (ServerList, ServerCard) and Material-UI integration.

database_dump.sql: Complete SQL schema for quick database deployment.
