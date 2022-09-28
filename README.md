# my-gitup-actions

- in docker hub, you can create only one repository. 

- for personal pro account you must pay 5 euro/monat.

- using docker for team 7 euro/person/monat.

- add to the end of your workflow
        
        - name: Build and Push Docker Image
          uses: mr.smithers-excellent/docker-build-push@v4
          with:
            image:DOCKER_USERNAME/DOCKER_TAG_NAME
            registry: docker.io
            username: ${{secrets.DOCKER_USERNAME}}
            password: ${{secrets.DOCKER_PASSWORD}}
