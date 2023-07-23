# nexus
The first repo for ai website


### Deployments

Deployments are automatically triggered through CircleCI's CI/CD when changes are made to the main branch. To enable seamless deployment, CircleCI should have SSH keys without a passphrase. Follow the steps below:

1. Generate an SSH key pair on your local machine.
2. Import the SSH key pair to cPanel by accessing the "Manage SSH keys" section. Refer to the "Import SSH Key" section in the [cPanel documentation](https://docs.cpanel.net/cpanel/security/ssh-access/) for detailed instructions.
3. Authenticate the SSH public key. The process for authenticating the SSH key in cPanel is explained in the [cPanel documentation](https://docs.cpanel.net/cpanel/security/ssh-access/).
4. Add the SSH private key to CircleCI's SSH key configuration, associating it with the appropriate domain name. For instructions on how to add an additional SSH key to CircleCI, refer to the [CircleCI documentation](https://circleci.com/docs/add-ssh-key/).

CircleCI relies on specific environment variables for deployment. Make sure to set the following environment variables:

- `SSH_HOST`: The server address where the code should be deployed.
- `SSH_PORT`: The port number to be used for connecting to the server.
- `SSH_USER`: The username to be used for connecting to the server.

You can find the necessary values for these environment variables in the ["Manage Shell"](https://www.namecheap.com/support/knowledgebase/article.aspx/10040/2210/how-to-enable-ssh-shell-in-cpanel/) section of cPanel on Namecheap's platform.

"# landing_tmp_1" 
