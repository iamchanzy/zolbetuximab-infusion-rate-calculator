* {
  box-sizing: border-box;
}

:root {
  --bg: #f3f7fb;
  --panel: #ffffff;
  --panel-alt: #edf4ff;
  --primary: #1d4ed8;
  --primary-dark: #1e3a8a;
  --accent: #0ea5e9;
  --text: #1f2937;
  --muted: #6b7280;
  --border: #dbe3ef;
  --success: #0f766e;
  --warning: #b45309;
  --warning-bg: #fff7ed;
  --shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: linear-gradient(180deg, #eef5ff 0%, var(--bg) 100%);
  color: var(--text);
}

.app-shell {
  max-width: 1100px;
  margin: 0 auto;
  padding: 32px 20px 48px;
}

.topbar {
  margin-bottom: 24px;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--primary);
  font-size: 0.72rem;
  font-weight: 700;
  margin: 0 0 8px;
}

h1 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.1;
}

.card {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow);
  padding: 24px;
}

.input-card {
  margin-bottom: 24px;
}

h2 {
  margin-top: 0;
  margin-bottom: 18px;
  font-size: 1.4rem;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-weight: 600;
}

input {
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 12px 14px;
  font-size: 1rem;
  background: #fff;
  color: var(--text);
}

input:focus {
  outline: 2px solid rgba(29, 78, 216, 0.18);
  border-color: var(--primary);
}

.muted {
  color: var(--muted);
  font-weight: 500;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}

button {
  border: none;
  border-radius: 10px;
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.15s ease, opacity 0.15s ease;
}

button:hover {
  transform: translateY(-1px);
}

#calculateBtn {
  background: var(--primary);
  color: white;
}

.secondary {
  background: var(--panel-alt);
  color: var(--primary-dark);
}

.result-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
}

.result-box {
  border: 1px solid var(--border);
  border-radius: 12px;
  background: #f9fbff;
  padding: 16px 18px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
}

.label {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
  font-weight: 700;
}

.result-box strong {
  font-size: clamp(1.25rem, 2vw, 1.8rem);
  line-height: 1.2;
}

.warning-box {
  background: var(--warning-bg);
  border-color: #fed7aa;
}

.formula-box {
  margin-top: 24px;
  border-top: 1px solid var(--border);
  padding-top: 20px;
}

.formula-box h3 {
  margin-top: 0;
  margin-bottom: 12px;
}

.formula-box p {
  margin: 0;
  color: var(--text);
  line-height: 1.7;
}

@media (max-width: 640px) {
  .app-shell {
    padding-left: 14px;
    padding-right: 14px;
  }

  .card {
    padding: 18px;
  }
}
