# Curious Engineer Studio

Publik webbplats för [curiousengineerstudio.se](https://curiousengineerstudio.se/).

## Sidor

- `/` — företagslandning
- `/MachineBloom/` — spelsida
- `/MachineBloom/ambassadors/` — tvåspråkigt ambassadörsprogram och intresseanmälan
- `/MachineBloom/ambassadors/android-access/` — guide för Android-teståtkomst via Google Play
- `/MachineBloom/press/` — tvåspråkigt pressmaterial och högupplösta bilder
- `/MachineBloom/privacy/` — integritetspolicy
- `/MachineBloom/playtest/` — äldre länk som leder vidare till ambassadörsprogrammet
- `/Defence-Grid/privacy/` — permanent redirect till Machine Bloom privacy
- `/Defence-Grid/test/` och `/Defence-Grid/release/` — publiceras av Defence-Grid CI (hemliga webbtester)

## Lokal förhandsvisning

```bash
./serve.sh
```

Öppna [http://127.0.0.1:8080/](http://127.0.0.1:8080/). Annan port: `./serve.sh 3000`.

På Windows (PowerShell) går det också utan skriptet:

```powershell
python -m http.server 8080 --bind 127.0.0.1
```

## Hosting

GitHub Pages från den här repots `main`-branch. Custom domain via `CNAME`.

Vite-webbappen byggs i `Defence-Grid` och pushas hit under `Defence-Grid/test/` respektive `Defence-Grid/release/`.
