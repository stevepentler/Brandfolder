## POLL MACHINE

[LIVE ON HEROKU](https://poll-machine.herokuapp.com/) || [GITHUB](https://github.com/stevepentler/Brandfolder) 

#### A personal effort from: 
[Steve Pentler](https://github.com/stevepentler) 

![](http://recordit.co/h7mvsOxVMd.gif)

####Pitch

A fun way to create/manage polls, share them with friends on social media, and watch the live results as they stream in. 

#### Integrations
- [React Rails Gem](https://github.com/reactjs/react-rails) => React with a Rails backend and internal API.

#### React Components
##### Survey Index Page (only accessed by authenticated owner)
  - **Main**  (maintains all state and AJAX calls)
    - **ExistingSurveys**  (lists all existing surveys with links)
    - **NewSurvey**  (form to create new surveys)
##### Survey Show Page (Accessed by all)
  - **App**  (maintains all state and AJAX calls)
    - **SurveyResults**  (General Survey information and social media sharing)
      - **Graph**  (Graphs live results using chart.js)
      - **Options**  (Displays options dependent on survey status and previous voting history)

#### Features
  - Share polls on social media
  - Prevent multiple responses from users without requiring them to login
  - *Real time* updates
  - Polls automatically expire after a custom expiration date

#### Challenges:

- **Data Accuracy:** Maintaining a consistency across multiple users. Accordingly, the state is updated using a setInterval function within the App Component. Accordingly, any time the data in state changes, the application responds - regardless of the user.

- **Timing:** Utilizing proper React lifecycle components and delaying events until all props are available. 

- **Graphing with Chart.js:** This was my first time using the Chart.js library!

####Testing:
- This app is untested due to time constraints

####To Run this Application Locally: 

If you wish to download the project and set it up locally, run the following commands:

```
$ git clone https://github.com/stevepentler/Brandfolder.git
```
```
$ bundle
```
```
$ rake db:reset
```
- This application utilizes a Postgres database. Ensure that Postgres is running. The `rake db:reset` command is equivalent to `rake db:create`, `rake db:migrate`, and `rake db:seed`.

```
$ rails s
``` 

- Run this command in a seperate terminal pane to start the actual Rails server
- Visit `http://localhost:3000` to see the application on your local server
