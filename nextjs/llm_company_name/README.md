# Next.js LangChain Basic LLM call client

This basic Next.js app is a frontend to a LangChain app via the LangCorn API.

This specific app calls this example: [ex1.py](https://github.com/msoedov/langcorn/blob/main/examples/ex1.py). 

This same client can be used for [ex2.py](https://github.com/msoedov/langcorn/blob/main/examples/ex2.py), just make sure to change the endpoint and the POST variable (`input`, instead of `product`) or for [ex3.py](https://github.com/msoedov/langcorn/blob/main/examples/ex3.py) (`question`, instead of `product`).

Run the API as follows:

```
pip install langcorn
mkdir -p examples
curl -L -o examples/ex1.py https://raw.githubusercontent.com/msoedov/langcorn/main/examples/ex1.py
python -m langcorn server examples.ex1:chain
```

Then:

```
cp env_example.local .env.local
```

and make sure the API endpoint is assigned correctly to `LC_ENDPOINT_URL`. 

