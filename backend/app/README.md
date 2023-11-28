# Tutorship Application Backend

The Tutorship Application Backend serves as the core infrastructure, handling data management and interactions between the application's frontend and the underlying database system.

## Backend Framework: FastAPI

The entire backend system is developed using FastAPI, a modern web framework for building APIs with Python. FastAPI offers:
- High performance, thanks to asynchronous capabilities.
- Automatic generation of interactive API documentation via Swagger UI and ReDoc.
- In-built validation and serialization of request/response data using Pydantic.

## Starting the Backend Application

To start the backend application, follow these steps:

1. **Clone the Repository**: Clone the repository containing the backend code:
   ```git clone git@github.com:wulzymart/tutorship.git
   cd tutorship/backend/app```
2. **Setup Virtual Environment (Optional but recommended)**: Create and activate a virtual environment:
   ```python -m venv venv
   source venv/bin/activate  # On Windows: .\venv\Scripts\activate```
3. **Install Dependencies**: Install the required dependencies**
   ```pip install -r requirements.txt```
4. **Setup the Database**: Run the SQL database setup script (setup_db.sql) provided in the repository to initialize the required database structure.
   ```cat ../setub_db.sql | sudo mysql```
5. **Run the FastAPI Application**: Start the FastAPI application using uvicorn:
   ```uvicorn main:app --reload```
6. **Accessing the API**: Once the FastAPI application is running, navigate to http://localhost:8000/docs in your browser to access the Swagger UI documentation and interact with the API endpoints.

## Purpose

This comprehensive package consists of distinct subpackages, each serving a specialized role in managing and orchestrating backend functionalities, ensuring robust data handling and system reliability.

## Subpackages Overview

1. **Alembic**: Database Evolution Manager
    - Manages database schema migrations without compromising existing data integrity.
    - Facilitates smooth transitions between schema versions while preserving vital data.

2. **Databases**: Data Management Engine
    - Hosts the engine module responsible for data lifecycle management.
    - Controls data storage, updates, deletions, and retrievals from the database.

3. **Dependencies**: Engine Initialization Functions
    - Contains crucial dependency functions for initializing the database engine instance.
    - Lays the foundation for efficient CRUD operations on the database.

4. **Models**: Data Structure Definitions
    - Defines detailed model modules representing the database tables.
    - Ensures structured and organized data storage within the database.

5. **Routers**: Endpoint Management
    - Houses modules containing endpoints facilitating CRUD operations on database tables.
    - Serves as the communication bridge between the frontend and backend systems.

6. **Schemas**: Data Validation Modules
    - Hosts modules responsible for validating incoming request data.
    - Ensures data accuracy, consistency, and validates outgoing response data before transmission.

## How to Use

The backend architecture within this package is designed with a focus on seamless integration, reliability, and efficiency. Explore each subpackage to gain insights into its functionalities and contributions to the Tutorship application's backend operations.

Detailed documentation within each subpackage provides a technical dive into the core functionalities, offering developers a comprehensive understanding of the backend structure and its technical underpinnings.

---

This README serves as a technical guide, offering insights into the architecture and functionality of the Tutorship Application Backend. It elucidates the technical nuances of each subpackage, empowering developers to navigate and leverage the backend system effectively.
