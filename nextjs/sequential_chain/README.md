# Next.js LangChain Sequential Chain example client

This basic Next.js app is a frontend to a LangChain app via the LangCorn API.

This specific app calls this example: [ex4.py](https://github.com/msoedov/langcorn/blob/main/examples/ex4.py). 

Run the API as follows:

```
pip install langcorn
mkdir -p examples
curl -L -o examples/ex4.py https://raw.githubusercontent.com/msoedov/langcorn/main/examples/ex4.py
python -m langcorn server examples.ex4:chain
```

Then:

```
cp env_example.local .env.local
```

and make sure the API endpoint is assigned correctly to `LC_ENDPOINT_URL`. 

Note: the langchain app behaves a bit weird (makes up stuff), but that is not the point of this example code.
