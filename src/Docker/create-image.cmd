docker build --no-cache -f SQL\Dockerfile.PostgreSql -t fotokiosk1/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t fotokiosk1/app ../..
