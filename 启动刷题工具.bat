@echo off
setlocal
cd /d "%~dp0"

set "PORT=%~1"
if "%PORT%"=="" set "PORT=8123"

where node >nul 2>nul
if errorlevel 1 goto :nonode

echo.
echo   Starting local server on port %PORT% ...
echo   Close this window to stop the server.
echo.

start "" "http://localhost:%PORT%/index.html"
node "tools\serve.mjs" %PORT%

echo.
echo   Server stopped.
pause
exit /b 0

:nonode
echo.
echo   [ERROR] Node.js not found.
echo   Please install Node.js 18+ from https://nodejs.org/
echo.
echo   Alternative: just double-click index.html in this folder - it also works via file://
echo.
pause
exit /b 1
