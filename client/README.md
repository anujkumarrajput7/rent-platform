### Rentify
10-07-25

this are the file & folder structure of backand.


rent-platform/
├── client/         # React frontend
└── server/         # Node + Express backend
    ├── models/         # MongoDB schemas (User, Product)
    ├── routes/         # API routes
    ├── controllers/    # Logic behind routes
    ├── config/         # DB connection
    ├── .env            # Secrets like Mongo URI
    └── index.js        # Server entry point
