# FLUFFIE Auto-Sync Script for Windows
# This script automatically syncs changes to GitHub every 30 seconds

Write-Host "🚀 FLUFFIE Auto-Sync System Started!" -ForegroundColor Green
Write-Host "📁 Monitoring directory: $(Get-Location)" -ForegroundColor Cyan
Write-Host "⏰ Sync interval: 30 seconds" -ForegroundColor Yellow
Write-Host "🔄 Press Ctrl+C to stop auto-sync" -ForegroundColor Magenta
Write-Host "=" * 50

$lastCommitTime = Get-Date

while ($true) {
    try {
        # Check if there are any changes
        $status = git status --porcelain
        
        if ($status) {
            Write-Host "📝 Changes detected! Syncing to GitHub..." -ForegroundColor Yellow
            
            # Stage all changes
            git add .
            
            # Create commit with timestamp
            $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
            $commitMessage = "Auto-sync update $timestamp"
            git commit -m $commitMessage
            
            # Push to GitHub
            git push origin main
            
            if ($LASTEXITCODE -eq 0) {
                Write-Host "✅ Successfully synced to GitHub at $timestamp" -ForegroundColor Green
                $lastCommitTime = Get-Date
            } else {
                Write-Host "❌ Failed to push to GitHub" -ForegroundColor Red
            }
        } else {
            $currentTime = Get-Date -Format "HH:mm:ss"
            Write-Host "⏳ $currentTime - No changes detected, waiting..." -ForegroundColor Gray
        }
        
        # Wait 30 seconds before next check
        Start-Sleep -Seconds 30
        
    } catch {
        Write-Host "❌ Error occurred: $($_.Exception.Message)" -ForegroundColor Red
        Start-Sleep -Seconds 30
    }
}