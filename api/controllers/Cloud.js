
export const getAll = (req, res) => {
res.status(200).send(
    [
      {
        "cursor": "TPIG4ZQCScQ2b2J0cTIxYzczYW90ZWYw",
        "service": {
          "autoDeploy": "yes",
          "branch": "main",
          "createdAt": "2025-03-05T15:53:05.719683Z",
          "dashboardUrl": "https://dashboard.render.com/web/srv-cv476obtq21c73aotef0",
          "id": "srv-cv476obtq21c73aotef0",
          "name": "ToDo_Server1",
          "notifyOnFail": "default",
          "ownerId": "tea-cuto4mrqf0us73a0vo30",
          "repo": "https://github.com/MiriStrauss/ToDo_Server",
          "rootDir": "",
          "serviceDetails": {
            "buildPlan": "starter",
            "env": "docker",
            "envSpecificDetails": {
              "dockerCommand": "",
              "dockerContext": ".",
              "dockerfilePath": "./Dockerfile"
            },
            "healthCheckPath": "",
            "maintenanceMode": {
              "enabled": false,
              "uri": ""
            },
            "numInstances": 1,
            "openPorts": null,
            "plan": "free",
            "previews": {
              "generation": "off"
            },
            "pullRequestPreviewsEnabled": "no",
            "region": "singapore",
            "runtime": "docker",
            "sshAddress": "srv-cv476obtq21c73aotef0@ssh.singapore.render.com",
            "url": "https://todo-server1-jf6z.onrender.com"
          },
          "slug": "todo-server1-jf6z",
          "suspended": "not_suspended",
          "suspenders": [],
          "type": "web_service",
          "updatedAt": "2025-03-09T16:01:14.623581Z"
        }
      },
      {
        "cursor": "vglOup4SJ1tnbXRkczc4czczZTNwcmgw",
        "service": {
          "autoDeploy": "yes",
          "branch": "main",
          "createdAt": "2025-03-05T12:49:32.071478Z",
          "dashboardUrl": "https://dashboard.render.com/static/srv-cv44gmtds78s73e3prh0",
          "id": "srv-cv44gmtds78s73e3prh0",
          "name": "ToDo_Server",
          "notifyOnFail": "default",
          "ownerId": "tea-cuto4mrqf0us73a0vo30",
          "repo": "https://github.com/MiriStrauss/ToDo_Server",
          "rootDir": "",
          "serviceDetails": {
            "buildCommand": "npm run build",
            "buildPlan": "starter",
            "previews": {
              "generation": "off"
            },
            "publishPath": "build",
            "pullRequestPreviewsEnabled": "no",
            "url": "https://todo-server-asne.onrender.com"
          },
          "slug": "todo-server-asne",
          "suspended": "not_suspended",
          "suspenders": [],
          "type": "static_site",
          "updatedAt": "2025-03-09T15:59:23.916382Z"
        }
      },
      {
        "cursor": "vglOup4SJ1szaGJxZjB1czczYjVhdnIw",
        "service": {
          "autoDeploy": "yes",
          "branch": "main",
          "createdAt": "2025-03-05T12:21:25.52753Z",
          "dashboardUrl": "https://dashboard.render.com/static/srv-cv443hbqf0us73b5avr0",
          "id": "srv-cv443hbqf0us73b5avr0",
          "name": "To-Do-Client1",
          "notifyOnFail": "default",
          "ownerId": "tea-cuto4mrqf0us73a0vo30",
          "repo": "https://github.com/MiriStrauss/To-Do-Client",
          "rootDir": "",
          "serviceDetails": {
            "buildCommand": "npm run build",
            "buildPlan": "starter",
            "previews": {
              "generation": "off"
            },
            "publishPath": "build",
            "pullRequestPreviewsEnabled": "no",
            "url": "https://to-do-client1-p1w5.onrender.com"
          },
          "slug": "to-do-client1-p1w5",
          "suspended": "not_suspended",
          "suspenders": [],
          "type": "static_site",
          "updatedAt": "2025-03-09T12:51:01.576861Z"
        }
      },
      {
        "cursor": "mmrZXK93qnFoOHZub2U5czczOG41Zm5n",
        "service": {
          "autoDeploy": "yes",
          "branch": "main",
          "createdAt": "2025-03-04T22:03:16.287342Z",
          "dashboardUrl": "https://dashboard.render.com/static/srv-cv3nh8vnoe9s738n5fng",
          "id": "srv-cv3nh8vnoe9s738n5fng",
          "name": "To-Do-Client",
          "notifyOnFail": "default",
          "ownerId": "tea-cuto4mrqf0us73a0vo30",
          "repo": "https://github.com/MiriStrauss/To-Do-Client",
          "rootDir": "./To-Do-Client",
          "serviceDetails": {
            "buildCommand": "npm run build",
            "buildPlan": "starter",
            "previews": {
              "generation": "off"
            },
            "publishPath": "build",
            "pullRequestPreviewsEnabled": "no",
            "url": "https://to-do-client-t5ru.onrender.com"
          },
          "slug": "to-do-client-t5ru",
          "suspended": "not_suspended",
          "suspenders": [],
          "type": "static_site",
          "updatedAt": "2025-03-04T22:03:18.12308Z"
        }
      }
    
      ]
)
}
