npm install -D tailwindcss
npx tailwindcss init
content: ["./src/**/*.{html,js}"],
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
npm install -D prettier
npm install -D prettier-plugin-tailwindcss

finally add the following to you package-jason file:

"dev": tailwindcss -i ./src/input.css -o ./src/output.css --watch
