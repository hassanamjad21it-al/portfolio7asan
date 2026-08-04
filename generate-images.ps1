# ============================================================
# generate-images.ps1 — توليد صور Placeholder بصيغة JPG
# استخدام:  PowerShell -ExecutionPolicy Bypass -File generate-images.ps1
# الناتج:   assets/images/profile.jpg + project1..4.jpg
# ============================================================

Add-Type -AssemblyName System.Drawing

$outDir = Join-Path $PSScriptRoot 'assets\images'
if (-not (Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir -Force | Out-Null }

function New-Placeholder {
  param(
    [string]$Name,
    [int]$Width,
    [int]$Height,
    [string]$ColorTop,
    [string]$ColorBottom,
    [string]$Label
  )

  $bmp = New-Object System.Drawing.Bitmap($Width, $Height)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = 'AntiAlias'
  $g.TextRenderingHint = 'AntiAliasGridFit'

  # تدرج لوني باستيل
  $rect = New-Object System.Drawing.Rectangle(0, 0, $Width, $Height)
  $brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    $rect,
    [System.Drawing.Color]::FromArgb(255, 182, 156, 255), # مرجع افتراضي
    [System.Drawing.Color]::FromArgb(255, 249, 180, 208),
    45
  )
  $brush.Dispose()
  $brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    $rect,
    [System.Drawing.ColorTranslator]::FromHtml($ColorTop),
    [System.Drawing.ColorTranslator]::FromHtml($ColorBottom),
    45
  )
  $g.FillRectangle($brush, $rect)

  # نص
  $font = New-Object System.Drawing.Font('Segoe UI', 40, [System.Drawing.FontStyle]::Bold)
  $ink = [System.Drawing.Brushes]::Black
  $sf = New-Object System.Drawing.StringFormat
  $sf.Alignment = 'Center'
  $sf.LineAlignment = 'Center'
  $g.DrawString($Label, $font, $ink, (New-Object System.Drawing.RectangleF(0, 0, $Width, $Height)), $sf)

  $file = Join-Path $outDir $Name
  $bmp.Save($file, [System.Drawing.Imaging.ImageFormat]::Jpeg)
  Write-Host "تم إنشاء: $file"

  $g.Dispose()
  $bmp.Dispose()
  $font.Dispose()
}

# صورة البروفايل (مربعة)
New-Placeholder -Name 'profile.jpg' -Width 600 -Height 600 -ColorTop '#B69CFF' -ColorBottom '#F9B4D0' -Label 'HASSAN AMJAD'

# صور المشاريع
New-Placeholder -Name 'project1.jpg' -Width 800 -Height 500 -ColorTop '#B69CFF' -ColorBottom '#D9F1FF' -Label 'PROJECT 1'
New-Placeholder -Name 'project2.jpg' -Width 800 -Height 500 -ColorTop '#F9B4D0' -ColorBottom '#FFE4C4' -Label 'PROJECT 2'
New-Placeholder -Name 'project3.jpg' -Width 800 -Height 500 -ColorTop '#B6F5C8' -ColorBottom '#FFE58A' -Label 'PROJECT 3'
New-Placeholder -Name 'project4.jpg' -Width 800 -Height 500 -ColorTop '#FFE58A' -ColorBottom '#FFE4C4' -Label 'PROJECT 4'

Write-Host ''
Write-Host 'اكتمل التوليد بنجاح. استبدل الصور بصورك الحقيقية لاحقاً.'
