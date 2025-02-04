# Addition App (React + Flask) with Jenkins CI/CD

This is a simple addition app with a **React.js frontend** and **Flask backend**. The project is integrated with **Jenkins** for CI/CD and uses **Docker** for containerization.

## **Project Structure**
```
addition-app/
│-- backend/       # Flask Backend
│   │-- server.py  # Python backend code
│   │-- Dockerfile # Dockerfile for backend
│-- frontend/      # React Frontend
│   │-- src/       # React code
│   │-- Dockerfile # Dockerfile for frontend
│-- Jenkinsfile    # CI/CD Pipeline for Jenkins
```

---

## **1. Prerequisites**
- GitHub Account
- Docker Installed ([Install Docker](https://www.docker.com/))
- Jenkins Installed ([Install Jenkins](https://www.jenkins.io/))
- Node.js Installed ([Install Node.js](https://nodejs.org/))
- Python Installed ([Install Python](https://www.python.org/))

---

## **2. Setup & Installation**

### **Step 1: Clone the Repository**
```sh
git clone https://github.com/your-username/addition-app.git
cd addition-app
```

### **Step 2: Setup Backend (Flask)**

1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Create a Python virtual environment:
   ```sh
   python3 -m venv venv
   source venv/bin/activate  # (On Windows use `venv\Scripts\activate`)
   ```
3. Install Flask:
   ```sh
   pip install flask
   ```
4. Run the Flask server:
   ```sh
   python server.py
   ```
   - The server runs on **`http://localhost:5000`**
   - Test API: **`http://localhost:5000/add?num1=5&num2=10`**

### **Step 3: Setup Frontend (React.js)**
1. Navigate to the frontend folder:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend:
   ```sh
   npm start
   ```
   - The app runs on **`http://localhost:5173`**

---

## **3. Dockerizing the Application**

### **Build and Run Backend**
```sh
docker build -t addition-backend ./backend
docker run -d -p 5000:5000 addition-backend
```

### **Build and Run Frontend**
```sh
docker build -t addition-frontend ./frontend
docker run -d -p 5173:5173 addition-frontend
```

---

## **4. CI/CD with Jenkins**

### **Step 1: Install Jenkins**
Follow [this guide](https://www.jenkins.io/download/) to install Jenkins.

### **Step 2: Create a New Jenkins Pipeline**
1. Open **Jenkins Dashboard** → Click **New Item**.
2. Select **Pipeline** and name it `Addition App CI/CD`.
3. Under **Pipeline** section:
   - Select **Pipeline script from SCM**.
   - Set **Git** and enter your **GitHub Repository URL**.
   - Set branch as `main`.
4. Click **Save**.

### **Step 3: Add Jenkinsfile to Repository**
Create `Jenkinsfile` in the root of the repository:

```groovy
pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/your-username/addition-app.git'
            }
        }
        stage('Build Backend Docker Image') {
            steps {
                sh 'docker build -t addition-backend ./backend'
            }
        }
        stage('Run Backend Container') {
            steps {
                sh 'docker run -d -p 5000:5000 addition-backend'
            }
        }
        stage('Build Frontend Docker Image') {
            steps {
                sh 'docker build -t addition-frontend ./frontend'
            }
        }
        stage('Run Frontend Container') {
            steps {
                sh 'docker run -d -p 5173:5173 addition-frontend'
            }
        }
    }
}
```

### **Step 4: Run Jenkins Pipeline**
- Click **Build Now** to trigger the pipeline.
- Check **Console Output** for logs.

---

## **5. Automating Builds with Webhooks (Optional)**

### **Step 1: Setup GitHub Webhook**
1. Go to **GitHub Repo** → **Settings** → **Webhooks**.
2. Click **"Add Webhook"**.
3. Set **Payload URL** to:
   ```
   http://your-jenkins-server/github-webhook/
   ```
4. Select **application/json**.
5. Choose **Just the push event**.
6. Click **Add Webhook**.

### **Step 2: Enable Webhook Trigger in Jenkins**
1. Go to **Jenkins** → Open Job → **Configure**.
2. Enable **GitHub Hook Trigger for GITScm polling**.
3. Click **Save**.

---

## **6. Testing the Application**
1. Open **Frontend** at `http://localhost:5173`.
2. Enter two numbers and click **Add**.
3. Flask backend returns the sum.

---

## **7. Summary**
✔ **React.js Frontend** ✅  
✔ **Flask Backend** ✅  
✔ **Dockerized Containers** ✅  
✔ **Jenkins CI/CD Pipeline** ✅  
✔ **Automated GitHub Webhooks** (Optional) ✅  

