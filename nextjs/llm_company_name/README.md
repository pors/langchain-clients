# Next.js LangChain Basic LLM call client

This basic Next.js app is a frontend to a LangChain app via the LangCorn API.

This specific app calls this example: [ex1.py](https://github.com/msoedov/langcorn/blob/main/examples/ex1.py).

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

