# deployment script
if [ $# -ne 1 ]; then
    echo 'Usage: deploy.bash prod|dev'
    exit 1
fi
if [ $1 = 'dev' ]; then
    cp -v ./src/config/config.py.dev ./src/config/config.py
    exit 1
fi
cp -v ./src/config/config.py.prod ./src/config/config.py
