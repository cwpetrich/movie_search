# movie_search

## This is a *vue* into a project made with the *express* purpose of learning *nuxt* to everything I can about these technologies in the shortest time possible.

#### While it was a quick bit of coding, most of my time was spent researching different ways of doing things and throwing out most of them in favor of speed and functionality. There is a few things that are required in order for my ghetto setup to work:
*you must add a .env file to the base of the `webservice` folder and include these key value pairs:*
```
// .env

API_KEY=<your TMDB API key>
```
## Dependencies
* lts version of node installed (preferably latest)
* latest version of yarn installed

## Running the Project
### While there are ways of making things easier, I decided I ran out of time. Here are the steps needed to successfully use this absolutley beautiful creation I have here by named...
### "*Movie Search*":

* If this is the first time you are running these services you will need to run the `yarn` command in the base directories of each project in order to ensure each npm package is installed.
* Navigate to the base directory of the `webapp` project and type the command `yarn dev` in order to start up the frontend at `http://localhost:3000`.
* You must have the `.env` file mentioned above within your `webservice` project's base directory with proper values.
* Navigate to the base directory of the `webservice` project in another terminal tab/window and enter the command `yarn start` in order to start up the backend at `http://localhost:5000`.
* Then open up a browswer and navigate to `http://localhost:3000` and enjoy searching for movies!

### *SOME THOUGHTS*

#### While it may not be a looker, it does the job \*\\\_(^-^)\_/\*
#### Further improvements can be made in many (if not all) places and with the limited time I have alotted for myself, I decided to keep a list of things I'd like to do if I had more time:
* I didn't have enough time to implement unit testing, but that is definitely a MUST when considering future improvements.
* Caching within express (for... reasons...)
* Actually use best practices for Vue (preferably with typescript)
* Make the frontend not look silly, and by silly I mean not good (double negative alert)
* Properly handle *secrets* by using a more robust env variable management service
* Get at least one valid image for each movie then standardizing them rather than letting them have a broken img icon :(

### *SOME MORE THOUGHTS*

#### This was a fun project and it's been a while since I've gotten so excited to *DO* this sort of thing and I thoroughly recommend doing something similar. 
