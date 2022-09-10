touch .env

for env_var in "$@"
do
  echo "$env_var" >> .env
done
