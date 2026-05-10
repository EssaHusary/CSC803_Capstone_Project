# CSC803_Capstone_Project
Our capstone project, where we have created a chatbot that provides historical facts and validates the accuracy of those facts via backend RAG and LLM-as-a-judge techniques.

We will provide instructions for how to run our project. We do recommend using VSCode, but you are free to use whatever editor you want. Let's start with the backend, followed by the frontend. Here is how to run our chatbot project:

1) BACKEND instructions:
- First, run all of the cells in the notebook. We require that you mount the notebook to your Google Drive to be able to download and use the two large language models Llama and Qwen. So you will be prompted to do so. Please grant Google access.
- Second, patiently wait until all of the cells have run, which may take a bit of time, as two LLMs will be loaded onto the GPU.
- When the second-to-last cell is run, a URL will be generated, shown here: <img width="766" height="105" alt="image" src="https://github.com/user-attachments/assets/f9050505-14b3-40f4-94ed-29c14a5e3fb4" />
- Click on this URL. You will be directed to a page that looks like this: <img width="1279" height="601" alt="image" src="https://github.com/user-attachments/assets/98680ee3-cb19-4ae9-8f9b-f62711875974" />
- Simply copy and paste the IP address provided here: <img width="380" height="145" alt="image" src="https://github.com/user-attachments/assets/6fec52d3-1b15-4cf7-ad72-a7b22fca3b92" />
- Into this box: <img width="952" height="167" alt="image" src="https://github.com/user-attachments/assets/820c469e-2d1d-4bcc-a9ac-5cec1269d8f7" />
- Once you do so, you will be directed to a page that is for the most part empty, but at the top-left reads "{"detail":"Not Found"}": <img width="746" height="394" alt="image" src="https://github.com/user-attachments/assets/48e482f1-45cd-48dd-bcaf-956e65ba186e" />
- If you see this, you are good to go!
- So now let's navigate to the frontend.

2) FRONTEND instructions:
- Simply navigate to the Node.js website to install Node.js if you don't have it already. The link is here: https://nodejs.org/en/download.
- Next, open a terminal in the project folder, navigating to the "capstone-frontend" folder.
- From here, run "npm install". This will install the project dependencies.
- Finally, to run the project, simply type and enter in the terminal "npm start". This will start the frontend project. You will be immediately directed to our chatbot UI where you can begin to ask it history questions.

3) RESULT:
- You will finally see the UI, which will look like this: <img width="1279" height="733" alt="image" src="https://github.com/user-attachments/assets/979c13c7-a9f4-4f68-82b3-6327eafd0ef1" />
- The backend will be connected to the frontend, and you will see this: <img width="719" height="110" alt="image" src="https://github.com/user-attachments/assets/95d2343f-f649-4773-8f0a-d4f8a42c474c" />
- Even if you don't see these specific messages, but just see this: <img width="748" height="107" alt="image" src="https://github.com/user-attachments/assets/629f1fb9-617f-4e86-a6c4-e8fb69ca8799" />
- That's ok, you are good to go!
- All is well!
- If I ask the chatbot a question, you will see something like this: <img width="1279" height="735" alt="image" src="https://github.com/user-attachments/assets/a538d9f8-c3db-4da5-b8b0-bbe6404ed502" />
- In the backend, the second-to-last cell will look like this: <img width="968" height="127" alt="image" src="https://github.com/user-attachments/assets/e5428d47-b9eb-4a48-9444-d7bd705f0731" />
- HAVE FUN!!!!
