# Curious Engineer Studio

Publik webbplats för [curiousengineerstudio.se](https://curiousengineerstudio.se/).

## Sidor

- `/` — företagslandning
- `/MachineBloom/` — spelsida
- `/MachineBloom/privacy/` — integritetspolicy
- `/MachineBloom/playtest/` — information om stängt Google Play-test
- `/Defence-Grid/privacy/` — permanent redirect till Machine Bloom privacy
- `/Defence-Grid/test/` och `/Defence-Grid/release/` — publiceras av Defence-Grid CI (hemliga webbtester)

## Hosting

GitHub Pages från den här repots `main`-branch. Custom domain via `CNAME`.

Vite-webbappen byggs i `Defence-Grid` och pushas hit under `Defence-Grid/test/` respektive `Defence-Grid/release/`.
