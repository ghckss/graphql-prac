only one end-point.
get only what i want, not all -> clear overfetch problem

ex)

1. make GQL
   query {
   feed {
   comments
   likeNumber
   }
   notifications {
   isRead
   }
   user {
   username
   profilePric
   }
   }

2. call query
   {
   feed: [
   {
   comments:1,
   likeNumber: 20
   }
   ],
   notifications: [
   {
   isRead: true
   },
   {
   isRead: false
   }
   ],
   usesr: {
   username: "name",
   profile: ""
   }
   }
