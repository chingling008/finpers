finpers API Documentation
1. Introduction

finpers is a RESTful API that provides endpoints for managing personal financial transactions. This documentation outlines the available endpoints, their functionality, and the expected data formats.

2. Authentication
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

3. Endpoints

3.1 Transactions
/transactions
GET: Retrieve a list of transactions.
Query Parameters:
start_date: (Optional) Filter transactions by start date (ISO 8601 format).
end_date: (Optional) Filter transactions by end date (ISO 8601 format).
category: (Optional) Filter transactions by category.
Response:
200 OK:
JSON

[
    {
        "id": "transaction_id",
        "amount": 100.00,
        "date": "2024-11-28",
        "category": "Income",
        "description": "Salary",
        "userId": "user_id" 
    },
    { 
        "id": "transaction_id2",
        "amount": -50.00,
        "date": "2024-11-29",
        "category": "Expenses",
        "description": "Groceries",
        "userId": "user_id" 
    },
    ...
]
POST: Create a new transaction.
Request Body:
JSON

{
    "amount": 100.00,
    "date": "2024-11-28",
    "category": "Income",
    "description": "Salary",
    "userId": "user_id" 
}
Response:
201 Created:
JSON

{
    "id": "newly_created_transaction_id" 
}
PUT: Update an existing transaction (by ID).
Request Body: Same as for POST.
Response:
200 OK:
JSON

{
    "message": "Transaction updated successfully" 
}
DELETE: Delete a transaction (by ID).
Response:
204 No Content
3.2 Categories
/categories
GET: Retrieve a list of available categories.
Response:
200 OK:
JSON

[
    "Income",
    "Expenses",
    "Rent",
    "Groceries",
    "Utilities",
    "Entertainment",
    "Travel",
    ...
]
3.3 Reports (Optional)
/reports/summary
GET: Retrieve a summary of income and expenses within a specified date range.
Query Parameters:
start_date: (Required) Start date of the reporting period.
end_date: (Required) End date of the reporting period.
Response:
200 OK:
JSON

{
    "total_income": 1500.00,
    "total_expenses": 800.00,
    "net_balance": 700.00 
}
/reports/categories
GET: Retrieve a breakdown of expenses by category within a specified date range.
Query Parameters:
start_date: (Required) Start date of the reporting period.
end_date: (Required) End date of the reporting period.
Response:
200 OK:
JSON

[
    {
        "category": "Groceries",
        "total_amount": 300.00
    },
    {
        "category": "Rent",
        "total_amount": 500.00
    },
    ...
]
4. Error Handling

400 Bad Request: Invalid request data (e.g., missing required fields, invalid data types).
401 Unauthorized: Authentication failed.
403 Forbidden: Insufficient permissions.
404 Not Found: Resource not found.
500 Internal Server Error: An unexpected error occurred on the server.
