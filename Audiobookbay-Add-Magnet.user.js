// ==UserScript==
// @name        Audiobookbay - Add Magnet Link
// @description Add an easy-to-use magnet link to the top of the page
// @namespace   https://github.com/emukus
// @match       https://audiobookbay.li/*
// @match       https://audiobookbay.is/*
// @match       https://theaudiobookbay.se/*
// @grant       none
// @version     1.2
// @author      emukus
// @icon        data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiICAgd2lkdGg9IjQwMC42NTg3OCIgICBoZWlnaHQ9IjQ1NC45MTM2IiAgIGlkPSJzdmczMDYzIiAgIHZlcnNpb249IjEuMSIgICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjQ3cHJlMCIgICBzb2RpcG9kaTpkb2NuYW1lPSJOZXcgZG9jdW1lbnQgMyIgICBpbmtzY2FwZTpvdXRwdXRfZXh0ZW5zaW9uPSJvcmcuaW5rc2NhcGUub3V0cHV0LnN2Zy5pbmtzY2FwZSI+ICA8c29kaXBvZGk6bmFtZWR2aWV3ICAgICBpZD0iYmFzZSIgICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIgICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIgICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiICAgICBpbmtzY2FwZTp6b29tPSIxLjYzMTA3ODkiICAgICBpbmtzY2FwZTpjeD0iMjAwLjMyOTM5IiAgICAgaW5rc2NhcGU6Y3k9IjIyNy40NTY4MSIgICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJweCIgICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIgICAgIHNob3dncmlkPSJmYWxzZSIgICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTI4MCIgICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMDYiICAgICBpbmtzY2FwZTp3aW5kb3cteD0iLTQiICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTQiICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiAvPiAgPGRlZnMgICAgIGlkPSJkZWZzMzA2NSIgLz4gIDxtZXRhZGF0YSAgICAgaWQ9Im1ldGFkYXRhMzA2OCI+ICAgIDxyZGY6UkRGPiAgICAgIDxjYzpXb3JrICAgICAgICAgcmRmOmFib3V0PSIiPiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+ICAgICAgICA8ZGM6dHlwZSAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4gICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPiAgICAgIDwvY2M6V29yaz4gICAgPC9yZGY6UkRGPiAgPC9tZXRhZGF0YT4gIDxnICAgICBpZD0ibGF5ZXIxIiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIgICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEzMi43MTU4MywtMTQ0LjYwNDg0KSI+ICAgIDxnICAgICAgIGlkPSJnNDkzNSI+ICAgICAgPHBhdGggICAgICAgICBpZD0iMiIgICAgICAgICBzdHlsZT0iZmlsbDojYWEwMDAwO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojYWEwMDAwIiAgICAgICAgIGQ9Im0gMjg3LjcyMDI2LDU5My40OTIxMSAyMC4wNjc1MywtNDUuNjI0OTIgLTUuNTM1ODYsLTczLjU4ODU1IC0yMS40NTE1MSwyNy45NjM2NSB6IiAvPiAgICAgIDxwYXRoICAgICAgICAgaWQ9IjMiICAgICAgICAgc3R5bGU9ImZpbGw6Izk1OWJhMztmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6bm9uZSIgICAgICAgICBkPSJtIDI4MC44MDA0Miw1MDIuMjQyMjkgMjEuNDUxNTEsLTI3Ljk2MzY1IC0xMDMuMTA1NjMsMCAtNDcuNzQ2OSwyNy45NjM2NSB6IiAvPiAgICAgIDxwYXRoICAgICAgICAgaWQ9IjQiICAgICAgICAgc3R5bGU9ImZpbGw6Izk1OWJhMztmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6bm9uZSIgICAgICAgICBkPSJtIDE5OS4xNDYzLDQ3NC4yNzg2NCB6IG0gLTQ3Ljc0NjksMjcuOTYzNjUgeiIgLz4gICAgICA8cGF0aCAgICAgICAgIGlkPSI4IiAgICAgICAgIHN0eWxlPSJmaWxsOiNhYTAwMDA7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiNhYTAwMDAiICAgICAgICAgZD0iTSAyODguNDEyMjQsNTkzLjQ5MjExIDMwOC40Nzk3Nyw1NDcuODY3MTkgMjkyLjU2NDE1LDMyNi4zNjU2MiAyNjguMzQ0NywzMTcuNTM0OTkgeiIgLz4gICAgICA8cGF0aCAgICAgICAgIGlkPSI5IiAgICAgICAgIHN0eWxlPSJmaWxsOiNhYTAwMDA7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiNhYTAwMDAiICAgICAgICAgZD0ibSAyNjguMzQ0NywzMTcuNTM0OTkgMjQuMjE5NDUsOC44MzA2MyAwLjY5MTk4LC0xMi41MTAwNSAtMjQuMjE5NDQsLTExLjc3NDE3IHoiIC8+ICAgICAgPHBhdGggICAgICAgICBpZD0iMTAiICAgICAgICAgc3R5bGU9ImZpbGw6I2FhMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6I2FhMDAwMCIgICAgICAgICBkPSJtIDI2OS4wMzY2OSwzMDIuMDgxNCAyNC4yMTk0NCwxMS43NzQxNyAyLjc2Nzk0LC0xMC4zMDI0IC0yMy41Mjc0NiwtMTQuNzE3NzIgeiIgLz4gICAgICA8cGF0aCAgICAgICAgIGlkPSIxMSIgICAgICAgICBzdHlsZT0iZmlsbDojYWEwMDAwO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojYWEwMDAwIiAgICAgICAgIGQ9Im0gMjcyLjQ5NjYxLDI4OC44MzU0NSAyMy41Mjc0NiwxNC43MTc3MiA0Ljg0Mzg5LC05LjU2NjUyIC0yMi4xNDM1LC0xNi45MjUzNiB6IiAvPiAgICAgIDxwYXRoICAgICAgICAgaWQ9IjEyIiAgICAgICAgIHN0eWxlPSJmaWxsOiNhYTAwMDA7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiNhYTAwMDAiICAgICAgICAgZD0ibSAyNzguNzI0NDYsMjc3LjA2MTI5IDIyLjE0MzUsMTYuOTI1MzYgNi45MTk4MywtNy4zNTg4NiAtMjAuNzU5NTIsLTE5LjEzMzAyIHoiIC8+ICAgICAgPHBhdGggICAgICAgICBpZD0iMTMiICAgICAgICAgc3R5bGU9ImZpbGw6I2FhMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6I2FhMDAwMCIgICAgICAgICBkPSJtIDI4Ny4wMjgyNywyNjcuNDk0NzcgMjAuNzU5NTIsMTkuMTMzMDIgOC4zMDM4MSwtNi42MjI5NiAtMTguNjgzNTYsLTIwLjYwNDggeiIgLz4gICAgICA8cGF0aCAgICAgICAgIGlkPSIxNCIgICAgICAgICBzdHlsZT0iZmlsbDojYWEwMDAwO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojYWEwMDAwIiAgICAgICAgIGQ9Im0gMjk3LjQwODA0LDI1OS40MDAwMyAxOC42ODM1NiwyMC42MDQ4IDcuNjExODMsLTUuMTUxMiAtMTYuNjA3NjIsLTIxLjM0MDY4IHoiIC8+ICAgICAgPHBhdGggICAgICAgICBpZD0iMTUiICAgICAgICAgc3R5bGU9ImZpbGw6I2FhMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6I2FhMDAwMCIgICAgICAgICBkPSJtIDMwNy4wOTU4MSwyNTMuNTEyOTUgMTYuNjA3NjIsMjEuMzQwNjggOC45OTU3OSwtMi45NDM1NCAtMTQuNTMxNjcsLTIyLjA3NjU3IHoiIC8+ICAgICAgPHBhdGggICAgICAgICBpZD0iMTYiICAgICAgICAgc3R5bGU9ImZpbGw6I2FhMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6I2FhMDAwMCIgICAgICAgICBkPSJtIDMxOC4xNjc1NSwyNDkuODMzNTIgMTQuNTMxNjcsMjIuMDc2NTcgOC4zMDM4MSwtMC43MzU4OSAtMTEuNzYzNzMsLTIyLjgxMjQ1IHoiIC8+ICAgICAgPHBhdGggICAgICAgICBpZD0iMTciICAgICAgICAgc3R5bGU9ImZpbGw6I2FhMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6I2FhMDAwMCIgICAgICAgICBkPSJtIDMyOS4yMzkzLDI0OC4zNjE3NSAxMS43NjM3MywyMi44MTI0NSAxLjM4Mzk3LDAgLTExLjc2MzczLC0yMi44MTI0NSB6IiAvPiAgICAgIDxwYXRoICAgICAgICAgaWQ9IjE4IiAgICAgICAgIHN0eWxlPSJmaWxsOiNhYTAwMDA7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiNhYTAwMDAiICAgICAgICAgZD0ibSAzMzAuNjIzMjcsMjQ4LjM2MTc1IDExLjc2MzczLDIyLjgxMjQ1IDAuNjkxOTcsMCAtMTEuNzYzNzIsLTIyLjgxMjQ1IHoiIC8+ICAgICAgPHBhdGggICAgICAgICBpZD0iMTkiICAgICAgICAgc3R5bGU9ImZpbGw6I2FhMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6I2FhMDAwMCIgICAgICAgICBkPSJtIDMzMS4zMTUyNSwyNDguMzYxNzUgMTEuNzYzNzIsMjIuODEyNDUgMi43Njc5NCwwIC0xMS43NjM3MiwtMjIuODEyNDUgeiIgLz4gICAgICA8cGF0aCAgICAgICAgIGlkPSIyMCIgICAgICAgICBzdHlsZT0iZmlsbDojYWEwMDAwO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojYWEwMDAwIiAgICAgICAgIGQ9Im0gMzM0LjA4MzE5LDI0OC4zNjE3NSAxMS43NjM3MiwyMi44MTI0NSAyLjc2Nzk1LDAuNzM1ODkgLTExLjA3MTc1LC0yMi44MTI0NiB6IiAvPiAgICAgIDxwYXRoICAgICAgICAgaWQ9IjIxIiAgICAgICAgIHN0eWxlPSJmaWxsOiNhYTAwMDA7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiNhYTAwMDAiICAgICAgICAgZD0ibSAzMzcuNTQzMTEsMjQ5LjA5NzYzIDExLjA3MTc1LDIyLjgxMjQ2IDcuNjExODEsMS40NzE3NyAtOC45OTU3OCwtMjIuMDc2NTcgeiIgLz4gICAgICA8cGF0aCAgICAgICAgIGlkPSIyMiIgICAgICAgICBzdHlsZT0iZmlsbDojYWEwMDAwO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojYWEwMDAwIiAgICAgICAgIGQ9Im0gMzQ3LjIzMDg5LDI1MS4zMDUyOSA4Ljk5NTc4LDIyLjA3NjU3IDguMzAzODEsMi45NDM1NSAtNi45MTk4NCwtMjEuMzQwNjkgeiIgLz4gICAgICA8cGF0aCAgICAgICAgIGlkPSIyMyIgICAgICAgICBzdHlsZT0iZmlsbDojYWEwMDAwO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojYWEwMDAwIiAgICAgICAgIGQ9Im0gMzU3LjYxMDY0LDI1NC45ODQ3MiA2LjkxOTg0LDIxLjM0MDY5IDcuNjExODMsNC40MTUzMSAtNC44NDM4OSwtMTkuODY4OTIgeiIgLz4gICAgICA8cGF0aCAgICAgICAgIGlkPSIyNCIgICAgICAgICBzdHlsZT0iZmlsbDojYWEwMDAwO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojYWEwMDAwIiAgICAgICAgIGQ9Im0gMzY3LjI5ODQyLDI2MC44NzE4IDQuODQzODksMTkuODY4OTIgNy42MTE4Myw2LjYyMjk2IC0zLjQ1OTkyLC0xOC4zOTcxNCB6IiAvPiAgICAgIDxwYXRoICAgICAgICAgaWQ9IjI1IiAgICAgICAgIHN0eWxlPSJmaWxsOiNhYTAwMDA7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiNhYTAwMDAiICAgICAgICAgZD0ibSAzNzYuMjk0MjIsMjY4Ljk2NjU0IDMuNDU5OTIsMTguMzk3MTQgNS41MzU4Nyw4LjA5NDc1IC0xLjM4Mzk3LC0xNi45MjUzNyB6IiAvPiAgICAgIDxwYXRoICAgICAgICAgaWQ9IjI2IiAgICAgICAgIHN0eWxlPSJmaWxsOiNhYTAwMDA7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiNhYTAwMDAiICAgICAgICAgZD0ibSAzODMuOTA2MDQsMjc4LjUzMzA2IDEuMzgzOTcsMTYuOTI1MzcgNC44NDM4OSw4LjA5NDc0IC0wLjY5MTk4LC0xMy45ODE4MyB6IiAvPiAgICAgIDxwYXRoICAgICAgICAgaWQ9IjI3IiAgICAgICAgIHN0eWxlPSJmaWxsOiNhYTAwMDA7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiNhYTAwMDAiICAgICAgICAgZD0ibSAzODkuNDQxOTIsMjg5LjU3MTM0IDAuNjkxOTgsMTMuOTgxODMgMi4wNzU5NCwxMC4zMDI0IDAsLTExLjc3NDE3IHoiIC8+ICAgICAgPHBhdGggICAgICAgICBpZD0iMjgiICAgICAgICAgc3R5bGU9ImZpbGw6I2FhMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6I2FhMDAwMCIgICAgICAgICBkPSJtIDM5Mi4yMDk4NCwzMDIuMDgxNCAwLDExLjc3NDE3IDEuMzgzOTcsMTEuNzc0MTcgMCwtOC44MzA2NCB6IiAvPiAgICAgIDxwYXRoICAgICAgICAgaWQ9IjMwIiAgICAgICAgIHN0eWxlPSJmaWxsOiNkMDQxMWE7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOm5vbmUiICAgICAgICAgZD0ibSAyMDcuNDUwMTEsNTQ3Ljg2NzE5IHogbSAtNDUuNjcwOTUsNDUuNjI0OTIgeiIgLz4gICAgICA8cGF0aCAgICAgICAgIGlkPSIzMSIgICAgICAgICBzdHlsZT0iZmlsbDojYWEwMDAwO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojYWEwMDAwIiAgICAgICAgIGQ9Im0gMjg3LjcyMDI2LDU5My40OTIxMSAyMC4wNjc1MywtNDUuNjI0OTIgLTUuNTM1ODYsLTczLjU4ODU1IC0yMS40NTE1MSwyNy45NjM2NSB6IiAvPiAgICAgIDxwYXRoICAgICAgICAgaWQ9IjMyIiAgICAgICAgIHN0eWxlPSJmaWxsOiM5NTliYTM7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOm5vbmUiICAgICAgICAgZD0ibSAyODAuODAwNDIsNTAyLjI0MjI5IDIxLjQ1MTUxLC0yNy45NjM2NSAtMTAzLjEwNTYzLDAgLTQ3Ljc0NjksMjcuOTYzNjUgeiIgLz4gICAgICA8cGF0aCAgICAgICAgIGlkPSIzMyIgICAgICAgICBzdHlsZT0iZmlsbDojOTU5YmEzO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTpub25lIiAgICAgICAgIGQ9Im0gMTk5LjE0NjMsNDc0LjI3ODY0IHogbSAtNDcuNzQ2OSwyNy45NjM2NSB6IiAvPiAgICAgIDxwYXRoICAgICAgICAgaWQ9IjM3IiAgICAgICAgIHN0eWxlPSJmaWxsOiNhYTAwMDA7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiNhYTAwMDAiICAgICAgICAgZD0iTSAyODguNDEyMjQsNTkzLjQ5MjExIDMwOC40Nzk3Nyw1NDcuODY3MTkgMjkyLjU2NDE1LDMyNi4zNjU2MiAyNjguMzQ0NywzMTcuNTM0OTkgeiIgLz4gICAgICA8cGF0aCAgICAgICAgIGlkPSIzOCIgICAgICAgICBzdHlsZT0iZmlsbDojYWEwMDAwO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojYWEwMDAwIiAgICAgICAgIGQ9Im0gMjY4LjM0NDcsMzE3LjUzNDk5IDI0LjIxOTQ1LDguODMwNjMgMC42OTE5OCwtMTIuNTEwMDUgLTI0LjIxOTQ0LC0xMS43NzQxNyB6IiAvPiAgICAgIDxwYXRoICAgICAgICAgaWQ9IjM5IiAgICAgICAgIHN0eWxlPSJmaWxsOiNhYTAwMDA7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiNhYTAwMDAiICAgICAgICAgZD0ibSAyNjkuMDM2NjksMzAyLjA4MTQgMjQuMjE5NDQsMTEuNzc0MTcgMi43Njc5NCwtMTAuMzAyNCAtMjMuNTI3NDYsLTE0LjcxNzcyIHoiIC8+ICAgICAgPHBhdGggICAgICAgICBpZD0iNDAiICAgICAgICAgc3R5bGU9ImZpbGw6I2FhMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6I2FhMDAwMCIgICAgICAgICBkPSJtIDI3Mi40OTY2MSwyODguODM1NDUgMjMuNTI3NDYsMTQuNzE3NzIgNC44NDM4OSwtOS41NjY1MiAtMjIuMTQzNSwtMTYuOTI1MzYgeiIgLz4gICAgICA8cGF0aCAgICAgICAgIGlkPSI0MSIgICAgICAgICBzdHlsZT0iZmlsbDojYWEwMDAwO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojYWEwMDAwIiAgICAgICAgIGQ9Im0gMjc4LjcyNDQ2LDI3Ny4wNjEyOSAyMi4xNDM1LDE2LjkyNTM2IDYuOTE5ODMsLTcuMzU4ODYgLTIwLjc1OTUyLC0xOS4xMzMwMiB6IiAvPiAgICAgIDxwYXRoICAgICAgICAgaWQ9IjQyIiAgICAgICAgIHN0eWxlPSJmaWxsOiNhYTAwMDA7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiNhYTAwMDAiICAgICAgICAgZD0ibSAyODcuMDI4MjcsMjY3LjQ5NDc3IDIwLjc1OTUyLDE5LjEzMzAyIDguMzAzODEsLTYuNjIyOTYgLTE4LjY4MzU2LC0yMC42MDQ4IHoiIC8+ICAgICAgPHBhdGggICAgICAgICBpZD0iNDMiICAgICAgICAgc3R5bGU9ImZpbGw6I2FhMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6I2FhMDAwMCIgICAgICAgICBkPSJtIDI5Ny40MDgwNCwyNTkuNDAwMDMgMTguNjgzNTYsMjAuNjA0OCA3LjYxMTgzLC01LjE1MTIgLTE2LjYwNzYyLC0yMS4zNDA2OCB6IiAvPiAgICAgIDxwYXRoICAgICAgICAgaWQ9IjQ0IiAgICAgICAgIHN0eWxlPSJmaWxsOiNhYTAwMDA7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiNhYTAwMDAiICAgICAgICAgZD0ibSAzMDcuMDk1ODEsMjUzLjUxMjk1IDE2LjYwNzYyLDIxLjM0MDY4IDguOTk1NzksLTIuOTQzNTQgLTE0LjUzMTY3LC0yMi4wNzY1NyB6IiAvPiAgICAgIDxwYXRoICAgICAgICAgaWQ9IjQ1IiAgICAgICAgIHN0eWxlPSJmaWxsOiNhYTAwMDA7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiNhYTAwMDAiICAgICAgICAgZD0ibSAzMTguMTY3NTUsMjQ5LjgzMzUyIDE0LjUzMTY3LDIyLjA3NjU3IDguMzAzODEsLTAuNzM1ODkgLTExLjc2MzczLC0yMi44MTI0NSB6IiAvPiAgICAgIDxwYXRoICAgICAgICAgaWQ9IjQ2IiAgICAgICAgIHN0eWxlPSJmaWxsOiNhYTAwMDA7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiNhYTAwMDAiICAgICAgICAgZD0ibSAzMjkuMjM5MywyNDguMzYxNzUgMTEuNzYzNzMsMjIuODEyNDUgMS4zODM5NywwIC0xMS43NjM3MywtMjIuODEyNDUgeiIgLz4gICAgICA8cGF0aCAgICAgICAgIGlkPSI0NyIgICAgICAgICBzdHlsZT0iZmlsbDojYWEwMDAwO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojYWEwMDAwIiAgICAgICAgIGQ9Im0gMzMwLjYyMzI3LDI0OC4zNjE3NSAxMS43NjM3MywyMi44MTI0NSAwLjY5MTk3LDAgLTExLjc2MzcyLC0yMi44MTI0NSB6IiAvPiAgICAgIDxwYXRoICAgICAgICAgaWQ9IjQ4IiAgICAgICAgIHN0eWxlPSJmaWxsOiNhYTAwMDA7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiNhYTAwMDAiICAgICAgICAgZD0ibSAzMzEuMzE1MjUsMjQ4LjM2MTc1IDExLjc2MzcyLDIyLjgxMjQ1IDIuNzY3OTQsMCAtMTEuNzYzNzIsLTIyLjgxMjQ1IHoiIC8+ICAgICAgPHBhdGggICAgICAgICBpZD0iNDkiICAgICAgICAgc3R5bGU9ImZpbGw6I2FhMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6I2FhMDAwMCIgICAgICAgICBkPSJtIDMzNC4wODMxOSwyNDguMzYxNzUgMTEuNzYzNzIsMjIuODEyNDUgMi43Njc5NSwwLjczNTg5IC0xMS4wNzE3NSwtMjIuODEyNDYgeiIgLz4gICAgICA8cGF0aCAgICAgICAgIGlkPSI1MCIgICAgICAgICBzdHlsZT0iZmlsbDojYWEwMDAwO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojYWEwMDAwIiAgICAgICAgIGQ9Im0gMzM3LjU0MzExLDI0OS4wOTc2MyAxMS4wNzE3NSwyMi44MTI0NiA3LjYxMTgxLDEuNDcxNzcgLTguOTk1NzgsLTIyLjA3NjU3IHoiIC8+ICAgICAgPHBhdGggICAgICAgICBpZD0iNTEiICAgICAgICAgc3R5bGU9ImZpbGw6I2FhMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6I2FhMDAwMCIgICAgICAgICBkPSJtIDM0Ny4yMzA4OSwyNTEuMzA1MjkgOC45OTU3OCwyMi4wNzY1NyA4LjMwMzgxLDIuOTQzNTUgLTYuOTE5ODQsLTIxLjM0MDY5IHoiIC8+ICAgICAgPHBhdGggICAgICAgICBpZD0iNTIiICAgICAgICAgc3R5bGU9ImZpbGw6I2FhMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6I2FhMDAwMCIgICAgICAgICBkPSJtIDM1Ny42MTA2NCwyNTQuOTg0NzIgNi45MTk4NCwyMS4zNDA2OSA3LjYxMTgzLDQuNDE1MzEgLTQuODQzODksLTE5Ljg2ODkyIHoiIC8+ICAgICAgPHBhdGggICAgICAgICBpZD0iNTMiICAgICAgICAgc3R5bGU9ImZpbGw6I2FhMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6I2FhMDAwMCIgICAgICAgICBkPSJtIDM2Ny4yOTg0MiwyNjAuODcxOCA0Ljg0Mzg5LDE5Ljg2ODkyIDcuNjExODMsNi42MjI5NiAtMy40NTk5MiwtMTguMzk3MTQgeiIgLz4gICAgICA8cGF0aCAgICAgICAgIGlkPSI1NCIgICAgICAgICBzdHlsZT0iZmlsbDojYWEwMDAwO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojYWEwMDAwIiAgICAgICAgIGQ9Im0gMzc2LjI5NDIyLDI2OC45NjY1NCAzLjQ1OTkyLDE4LjM5NzE0IDUuNTM1ODcsOC4wOTQ3NSAtMS4zODM5NywtMTYuOTI1MzcgeiIgLz4gICAgICA8cGF0aCAgICAgICAgIGlkPSI1NSIgICAgICAgICBzdHlsZT0iZmlsbDojYWEwMDAwO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojYWEwMDAwIiAgICAgICAgIGQ9Im0gMzgzLjkwNjA0LDI3OC41MzMwNiAxLjM4Mzk3LDE2LjkyNTM3IDQuODQzODksOC4wOTQ3NCAtMC42OTE5OCwtMTMuOTgxODMgeiIgLz4gICAgICA8cGF0aCAgICAgICAgIGlkPSI1NiIgICAgICAgICBzdHlsZT0iZmlsbDojYWEwMDAwO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojYWEwMDAwIiAgICAgICAgIGQ9Im0gMzg5LjQ0MTkyLDI4OS41NzEzNCAwLjY5MTk4LDEzLjk4MTgzIDIuMDc1OTQsMTAuMzAyNCAwLC0xMS43NzQxNyB6IiAvPiAgICAgIDxwYXRoICAgICAgICAgaWQ9IjU3IiAgICAgICAgIHN0eWxlPSJmaWxsOiNhYTAwMDA7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiNhYTAwMDAiICAgICAgICAgZD0ibSAzOTIuMjA5ODQsMzAyLjA4MTQgMCwxMS43NzQxNyAxLjM4Mzk3LDExLjc3NDE3IDAsLTguODMwNjQgeiIgLz4gICAgICA8cGF0aCAgICAgICAgIGlkPSI1OSIgICAgICAgICBzdHlsZT0iZmlsbDojZDA0MTFhO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTpub25lIiAgICAgICAgIGQ9Im0gMjA3LjQ1MDExLDU0Ny44NjcxOSB6IG0gLTQ1LjY3MDk1LDQ1LjYyNDkyIHoiIC8+ICAgICAgPHBhdGggICAgICAgICBpZD0iNjAiICAgICAgICAgc3R5bGU9ImZpbGw6I2QwNDExYTtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6bm9uZSIgICAgICAgICBkPSJtIDE2MS43NzkxNiw1OTcuOTEwMzkgMTI2LjYzMzA4LDAgLTIwLjA2NzU0LC0yNzUuOTU3MTIgMC42OTE5OSwtMTUuNDUzNTkgMy40NTk5MiwtMTMuMjQ1OTUgNi4yMjc4NSwtMTEuNzc0MTYgOC4zMDM4MSwtOS41NjY1MiAxMC4zNzk3NywtOC4wOTQ3NCA5LjY4Nzc3LC01Ljg4NzA4IDExLjA3MTc0LC0zLjY3OTQzIDExLjA3MTc1LC0xLjQ3MTc3IDEuMzgzOTcsMCAwLjY5MTk4LDAgMi43Njc5NCwwIDMuNDU5OTIsMC43MzU4OCA5LjY4Nzc4LDIuMjA3NjYgMTAuMzc5NzUsMy42Nzk0MyA5LjY4Nzc4LDUuODg3MDggOC45OTU4LDguMDk0NzQgNy42MTE4Miw5LjU2NjUyIDUuNTM1ODgsMTEuMDM4MjggMi43Njc5MiwxMi41MTAwNiAxLjM4Mzk3LDE0LjcxNzcgLTE3Ljk5MTU4LDI3Ni42OTMwMSAxMzAuMDkzLDAgMjcuNjc5MzcsLTI3NS45NTcxMiAtMC42OTIsLTIxLjM0MDY4IC0yLjc2NzkyLC0xOS44Njg5IC00LjE1MTkxLC0xOC4zOTcxNSAtNi4yMjc4NiwtMTYuOTI1MzcgLTcuNjExODIsLTE2LjE4OTQ4IC04Ljk5NTgsLTE0LjcxNzcxIC0xMS4wNzE3MywtMTMuMjQ1OTUgLTEyLjQ1NTcyLC0xMS43NzQxNyAtMTQuNTMxNjcsLTEwLjMwMjM5IC0xNS4yMjM2NSwtOS41NjY1MiAtMTYuNjA3NjEsLTcuMzU4ODUgLTE4LjY4MzU3LC02LjYyMjk3IC0xOS4zNzU1NSwtNC40MTUzMiAtMjAuMDY3NTQsLTMuNjc5NDMgLTIyLjE0MzUsLTIuMjA3NjUgLTIyLjgzNTQ3LC0wLjczNTg5IC0yMi44MzU0NywwLjczNTg5IC0yMS40NTE1LDIuMjA3NjUgLTIwLjc1OTUzLDMuNjc5NDMgLTE4LjY4MzU3LDUuMTUxMiAtMTcuMjk5Niw2LjYyMjk3IC0xNi42MDc2Miw3LjM1ODg2IC0xNC41MzE2Niw5LjU2NjUxIC0xMy44Mzk2OCwxMS4wMzgyOSAtMTEuNzYzNzMsMTIuNTEwMDUgLTEwLjM3OTc2LDEzLjI0NTk0IC04Ljk5NTc5LDE1LjQ1MzYgLTYuOTE5ODUsMTYuOTI1MzcgLTYuMjI3ODUsMTguMzk3MTQgLTMuNDU5OTIsMTkuMTMzMDMgLTIuNzY3OTQsMjEuMzQwNjggLTAuNjkxOTgsMjIuODEyNDUgMjkuMDYzMzMsMjY3LjEyNjQ5IHoiIC8+ICAgICAgPHBhdGggICAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjIiAgICAgICAgIGlkPSJwYXRoNDc5NiIgICAgICAgICBkPSJtIDMxMC4zNzU0MSw1NTAuMzYyMDYgLTIxLjg0NDkzLDQ5LjE1NjM5IC04LjEzNTk2LC05MS44NTc4OCAyMy45MjE0OCwtMzcuMjAyMTEgNi4wNTk0MSw3OS45MDM2IiAgICAgICAgIHN0eWxlPSJmaWxsOiM2NjY2NjY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIC8+ICAgICAgPHBhdGggICAgICAgICBpZD0icGF0aDQ5MzMiICAgICAgICAgZD0ibSAxNTIuMDE4LDUwNy42NjA1NyAxMC4zNzk3Niw5MS4yNDk4MiAxMjUuOTQxMSwwIC02LjkxOTg0LC05MS4yNDk4MiAtMTI5LjQwMTAyLDAgeiIgICAgICAgICBzdHlsZT0iZmlsbDojOTU5YmEzO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTpub25lIiAvPiAgICAgIDxwYXRoICAgICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjYyIgICAgICAgICBpZD0icGF0aDQ3MDkiICAgICAgICAgZD0ibSAzODAuMTQwNzQsNTA3LjY2MDU3IC02LjgzNTkyLDkxLjI0OTgyIDEzMS4zOTMwNCwwLjYwODA2IDEwLjIxMTkyLC05MS44NTc4OCAtMTM0Ljc2OTA0LDAgeiIgICAgICAgICBzdHlsZT0iZmlsbDojOTU5YmEzO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTpub25lIiAvPiAgICA8L2c+ICA8L2c+PC9zdmc+
// @license     MIT
// @run-at      document-end
// ==/UserScript==

function runScript() {
  // Declare variables using 'const' or 'let'
  const trs = Array.from(document.querySelectorAll('table.torrent_info tr'));
  const h1 = document.querySelector('h1');

  // Check if 'h1' element exists before accessing 'innerText'
  const dn = h1 ? h1.innerText : '';

  // Use 'map' instead of 'filter' to extract tracker URLs and Info Hash
  const trackers = trs.map(e => {
    if (e.querySelector('td').innerText === 'Tracker:') {
      return e.querySelectorAll('td')[1].innerText;
    }
    return null;
  }).filter(Boolean); // Filter out null values

  const info_hash = trs.map(e => {
    if (e.querySelector('td').innerText === 'Info Hash:') {
      return e.querySelectorAll('td')[1].innerText;
    }
    return null;
  }).filter(Boolean)[0]; // Get the first Info Hash

  // Construct the Magnet URI
  let uri = `magnet:?xt=urn:btih:${info_hash || ''}`;
  uri += encodeURI(`&dn=${dn}&`);
  uri += trackers.map(e => encodeURI(`tr=${e}`)).join('&');

  // Add the Magnet Link to the page
  function addElem(uri) {
    if (h1) {
      const datauri = 'data:image/gif;base64,R0lGODlhDAAMALMPAOXl5ewvErW1tebm5oocDkVFRePj47a2ts0WAOTk5MwVAIkcDesuEs0VAEZGRv///yH5BAEAAA8ALAAAAAAMAAwAAARB8MnnqpuzroZYzQvSNMroUeFIjornbK1mVkRzUgQSyPfbFi/dBRdzCAyJoTFhcBQOiYHyAABUDsiCxAFNWj6UbwQAOw==';
      const newEl = document.createElement("div");
      const newAhref = document.createElement("a");
      const newImg = document.createElement("img");
      const span = document.createElement("span");

      newImg.setAttribute('src', datauri);
      newImg.style.paddingRight = '5px';

      newEl.appendChild(newAhref);
      newAhref.setAttribute('href', uri);
      span.innerText = "Magnet Link";
      newAhref.appendChild(newImg);
      newAhref.appendChild(span);

      newAhref.style.textDecoration = "underline";
      newAhref.style.padding = '2em';
      newAhref.style.background = '#eaeaea';
      newAhref.style.display = 'block';
      newAhref.style.textAlign = 'center';
      newAhref.style.fontSize = 'x-large';
      newImg.width = 24;
      newImg.height = 24;
      newImg.style.imageRendering = 'pixelated';

      // Append the new element just after the 'h1' element
      h1.parentNode.insertBefore(newEl, h1.nextSibling);
    }
  }

  // Call the 'addElem' function
  addElem(uri);
}

// Add a timeout to run the script after 1000 milliseconds (1 second)
setTimeout(runScript, 1000);
