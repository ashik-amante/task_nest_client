


# TaskNest – Job Seeking Platform  

A modern **job-seeking web application** where users can post, search, and apply for jobs seamlessly. The platform supports multiple job categories, a responsive design, and smooth user experience with authentication and private routes features.  

 **Live Site URL:** [https://tasknest-ccb72.web.app]  
 **Client Repo:** [https://github.com/ashik-amante/task_nest_client]  
 **Server Repo:** [https://github.com/ashik-amante/task_nest_server]  

---

##  Features  

-  **Browse & Filter Jobs** – Users can explore jobs by category:  
  - Category (Types of jobs)  
  - WorkMode (onsite,hybrid,remote)  
  - Search by job title  
  - Sort by deadline 
  -  

-  **Job Management System**  
  - Add new jobs with detailed info  
  - Update or delete posted jobs  
  - View jobs applied by the logged-in user  

-  **Authentication System**  
  - Email & Password login  
  - Google login  
  - Private routes (Job Details, Add Job, My Jobs, Applied Jobs)  

-  **Job Application Flow**  
  - Apply to jobs via modal form  
  - Auto-fill user details  
  - Resume link submission  
  - Applicant count updates in real-time  

---

##  Tech Stack  

**Frontend (Client):**  
- React.js (Vite)  
- React Router DOM  
- TanStack Query  
- Tailwind CSS / DaisyUI / Custom styling  
- Framer Motion (for animation)  
- Firebase (Authentication & Hosting)  

**Backend (Server):**  
- Node.js  
- Express.js  
- MongoDB Atlas (Database)  
- JWT Authentication  
- Vercel (Deployment)  

---

##  Pages & Functionalities  

- **Home Page**  
  - Banner/Slider  
  - Job Categories (tab-based filtering)  
  - Extra engaging sections  

- **All Jobs Page**  
  - Jobs in tabular format  
  - Search by job title  
  - View details (private route)  

- **Job Details Page**  
  - Job info with banner, salary, applicants count  
  - Apply Modal with resume submission  
  - Deadline validation  

- **Add A Job (Private)**  
  - Post new jobs (with form validations)  

- **My Jobs (Private)**  
  - View all posted jobs  
  - Update/Delete functionality with confirmation   

- **Authentication Pages**  
  - Login (Email/Password, Google)  
  - Registration (Name, Email, Password, Photo URL)  
 

---

##  Installation & Setup  

Clone the repositories and run locally:  

### Client Setup  
```bash
git clone [client-repo-link]
cd client
npm install
npm run dev
```

### Server Setup  
```bash
git clone [server-repo-link]
cd server
npm install
npm run dev
```

 Create a `.env` file in both client & server with the required **Firebase** and **MongoDB** credentials.  

---



##  Deployment  

- **Frontend (Client):** Firebase Hosting  
- **Backend (Server):** Vercel  

---  
