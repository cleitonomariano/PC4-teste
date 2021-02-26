const  modal = {
  open() {
    document.querySelector('.modal-overlay')
      .classList.add('active')
  },
  close() {
    document.querySelector('.modal-overlay')
      .classList.remove('active')
  }
}
const Users = [
  {
      "users": [
          {
              "name": "Amanda",
              "email":"test1@example.com",
              "department":"Sales",
              "occupation":"Account executive",
              "profile_image":"https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max",
              "cpf": 12354367890,
              "role":"Admin",
              "active":1
          },
          {
              "name": "Rodrigo",
              "email":"test2@example.com",
              "department":"Marketing",
              "occupation":"Brand Manager",
              "profile_image":"https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max",
              "cpf": 12354367890,
              "role":"Editor",
              "active":1
          },
          {
              "name": "Thiago",
              "email":"test3@example.com",
              "department":"Ads",
              "occupation":"Copywriting",
              "profile_image":"https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max",
              "cpf": 12354367890,
              "role":"Admin",
              "active":1
          },
          {
              "name": "Vanessa",
              "email":"test4@example.com",
              "department":"Social Media",
              "occupation":"Content Manager",
              "profile_image":"https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max",
              "cpf": 12354367890,
              "role":"Admin",
              "active":0
          },
          {
              "name": "Ashley S",
              "email":"test5@example.com",
              "department":"Branding & Marketing",
              "occupation":"Specialist",
              "profile_image":"https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max",
              "cpf": 12354367890,
              "role":"Admin",
              "active":1
          },
          {
              "name": "Kristopher",
              "email":"test5@example.com",
              "department":"Architectural Genie",
              "occupation":"Computer Network Architect",
              "profile_image":"https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max",
              "cpf": 12354367890,
              "role":"Admin",
              "active":1
          },
          {
              "name": "Robinson",
              "email":"test5@example.com",
              "department":"Branding",
              "occupation":"Trainee",
              "profile_image":"https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max",
              "cpf": 12354367890,
              "role":"Admin",
              "active":1
          }
      ]
  }
]