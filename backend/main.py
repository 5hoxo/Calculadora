from fastapi import FastAPI
import sympy
app = FastAPI()


@app.get("/matematica/{calculo}")
async def calcular(calculo: str):
    print(f"chegou este calculo: {calculo}")
    expr = sympy.sympify(calculo)
    result = expr.evalf()
    print(result)  
    return str(result)
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, port=8000)
