if [ $NODE_ENV = "production" ]; then
    echo "API inicializada em ambiente de produção"
    npm run start:prod
else
    echo "API inicializada em ambiente de desenvolvimento"
    npm start
fi