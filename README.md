# QE190064 PRN232 Assignment 1 Frontend

Public Next.js frontend for the TaskTrack workspace.

## Run locally

```powershell
Copy-Item .env.example .env.local
npm install
npm run dev
```

Set `NEXT_PUBLIC_API_URL` to the API base URL, for example `http://localhost:5100/api`.

Routes include the public overview, department/project/task details, task search, and public CRUD management pages.
