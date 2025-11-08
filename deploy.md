# Deployment Instructions for aayojana.com

## Build the Application

1. Run the build command:
```bash
npm run build
```

2. This will create a `dist` folder with all the static files needed for deployment.

## Upload to Your Hosting

1. Connect to your hosting via FTP/SFTP or file manager
2. Upload all contents from the `dist` folder to your domain's public folder (usually `public_html` or `www`)
3. Make sure the `index.html` file is in the root of your domain folder

## Server Configuration

Since this is a Single Page Application (SPA), you'll need to configure your server to redirect all routes to `index.html`.

### For Apache (.htaccess)
Create a `.htaccess` file in your root directory:

```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QR,L]
```

### For Nginx
Add this to your server configuration:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## Domain Configuration

1. Make sure your domain aayojana.com points to your hosting server
2. Configure SSL certificate for HTTPS
3. Test the deployment by visiting your domain

## Hosting Credentials
- Host: aayojana.com
- Username: aayojana_ruo1bq400nn
- Password: 6mjq6x3CwD?Cyf_g

## Files to Upload
After running `npm run build`, upload these files from the `dist` folder:
- index.html
- assets/ (folder with CSS and JS files)
- vite.svg
- Any other static assets