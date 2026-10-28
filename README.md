# hydra-updater-test

Dummy [electron-updater](https://github.com/electron-userland/electron-builder) feed for the new Hydra launcher.

This is not a real installer. Release `v9.9.9` exists so a build on `4.21.5` (or anything older) can see an update, download the dummy file, and stop there. Running the downloaded file does nothing useful, and install will fail. That is intentional.

## What the launcher reads

`electron-updater` uses the GitHub provider and the `latest` channel. It loads the `latest.yml` asset on the newest non-draft release, then downloads the file named in that manifest.

| Asset | Role |
|---|---|
| `latest.yml` | Version, size, and sha512 the updater verifies |
| `hydra-update-dummy-9.9.9.txt` | The file it downloads |

## Point a local launcher at this repo

```
MAIN_VITE_UPDATE_OWNER=idkjace
MAIN_VITE_UPDATE_REPO=hydra-updater-test
HYDRA_UPDATE_OWNER=idkjace
HYDRA_UPDATE_REPO=hydra-updater-test
```

Restart the dev process after changing those. Vite only inlines `MAIN_VITE_*` at startup.

Manual download page, for the worker policy `updateUrl`:

https://github.com/idkjace/hydra-updater-test/releases/latest
