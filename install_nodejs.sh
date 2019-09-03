# Install the latest version of Node.js on Ubuntu
# Source:
https://tecadmin.net/install-latest-nodejs-npm-on-ubuntu/
https://askubuntu.com/questions/426750/how-can-i-update-my-nodejs-to-the-latest-version

# Update the apt-get
sudo apt-get update

# Install curl if needed
sudo apt-get install curl

# Now download the right Node.js package 10, 12 or more recent
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -

# And install Node.js now
sudo apt-get install nodejs

# Now check the Node.js version to see if the Update or Install worked
node -v 
# Response:
v10.16.3
