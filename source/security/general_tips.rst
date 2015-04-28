#####################
General Security Tips
#####################

There are a few basic things you can do to enhance the overall security
of your web site.

1. You should update regularly.
2. You should use and test :doc:`our supplied \`.htaccess\` file to prevent arbitrary code execution <arbitrary_code_execution>`.
3. You should use SSL certificates if they're available.
4. You should implement a reasonable password policy:

  - Require :ref:`a minimum password length <security-min-password-label>` of at least 8 characters
  - Require :ref:`secure passwords <security-require-secure-passwords-label>` that include at least one lowercase and uppercase letter, and one number
  - Enable :ref:`password lockouts <security-enable-passwd-lockout-label>`

5. You should only provide people with the minimum permissions they need to do what they need to do. In ExpressionEngine parlance, don't put everyone in the Super Admin member group.
