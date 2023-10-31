## Apollo Server Express & Mongodb | Nodejs y GraphQL API CRUD

---

> #### Get all tasks

```graphql
query {
  getAllTasks {
    title
    id
    description
  }
}
```

---

> #### Get one Task

```graphql
query {
  getTask(id: "65406c37fc029a412867bbbf") {
    title
    description
  }
}
```

---

> #### Create Task

```graphql
mutation {
  createTask(task: { title: "task 5", description: "desc 5" }) {
    id
    title
    description
  }
}
```

---

> #### Update Task

```graphql
mutation {
  updateTask(id: "65406c37fc029a412867bbbf", task: { title: "task 1" }) {
    id
    title
    description
  }
}
```

---

> #### Delete Task

```graphql
mutation {
  deleteTask(id: "65406cb9c41247547399a635")
}
```

---

[Video Tutorial](https://youtu.be/fIZxZk_szWw?si=usqDNL2SFN6LYShG)
