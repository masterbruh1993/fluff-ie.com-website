@echo off
title FLUFFIE Auto-Sync System
echo.
echo ========================================
echo    FLUFFIE Auto-Sync System
echo ========================================
echo.
echo Starting PowerShell auto-sync script...
echo.

REM Run the PowerShell script
powershell.exe -ExecutionPolicy Bypass -File "%~dp0auto-sync.ps1"

pause