# Zolbetuximab Infusion Rate Calculator

A simple front-end calculator for estimating dose, infusion volume, and rate for zolbetuximab administration.

## Run locally

Open `index.html` in a browser, or serve the folder with a local static server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Included fields

- Patient weight (kg)
- Dose (mg/kg)
- Concentration (mg/mL)
- Infusion duration (minutes)
- Optional bag volume (mL)

## Calculation logic

- Total dose = weight × dose per kg
- Volume required = total dose ÷ concentration
- Infusion rate = volume ÷ time
- Approximate drop rate = mL/min × 20 gtt/mL

This tool is intended for education and quick estimation only and should not replace institutional protocol or pump settings.
