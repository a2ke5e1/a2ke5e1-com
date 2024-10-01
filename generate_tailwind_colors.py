md_colors = """
    --md-sys-color-primary: rgb(104 84 142);
    --md-sys-color-surface-tint: rgb(104 84 142);
    --md-sys-color-on-primary: rgb(255 255 255);
    --md-sys-color-primary-container: rgb(235 221 255);
    --md-sys-color-on-primary-container: rgb(35 15 70);
    --md-sys-color-secondary: rgb(99 91 112);
    --md-sys-color-on-secondary: rgb(255 255 255);
    --md-sys-color-secondary-container: rgb(233 222 248);
    --md-sys-color-on-secondary-container: rgb(31 24 43);
    --md-sys-color-tertiary: rgb(126 82 93);
    --md-sys-color-on-tertiary: rgb(255 255 255);
    --md-sys-color-tertiary-container: rgb(255 217 225);
    --md-sys-color-on-tertiary-container: rgb(49 16 27);
    --md-sys-color-error: rgb(186 26 26);
    --md-sys-color-on-error: rgb(255 255 255);
    --md-sys-color-error-container: rgb(255 218 214);
    --md-sys-color-on-error-container: rgb(65 0 2);
    --md-sys-color-background: rgb(254 247 255);
    --md-sys-color-on-background: rgb(29 27 32);
    --md-sys-color-surface: rgb(254 247 255);
    --md-sys-color-on-surface: rgb(29 27 32);
    --md-sys-color-surface-variant: rgb(231 224 235);
    --md-sys-color-on-surface-variant: rgb(73 69 78);
    --md-sys-color-outline: rgb(122 117 127);
    --md-sys-color-outline-variant: rgb(203 196 207);
    --md-sys-color-shadow: rgb(0 0 0);
    --md-sys-color-scrim: rgb(0 0 0);
    --md-sys-color-inverse-surface: rgb(50 47 53);
    --md-sys-color-inverse-on-surface: rgb(245 239 247);
    --md-sys-color-inverse-primary: rgb(211 188 253);
    --md-sys-color-primary-fixed: rgb(235 221 255);
    --md-sys-color-on-primary-fixed: rgb(35 15 70);
    --md-sys-color-primary-fixed-dim: rgb(211 188 253);
    --md-sys-color-on-primary-fixed-variant: rgb(79 61 116);
    --md-sys-color-secondary-fixed: rgb(233 222 248);
    --md-sys-color-on-secondary-fixed: rgb(31 24 43);
    --md-sys-color-secondary-fixed-dim: rgb(205 194 219);
    --md-sys-color-on-secondary-fixed-variant: rgb(75 67 88);
    --md-sys-color-tertiary-fixed: rgb(255 217 225);
    --md-sys-color-on-tertiary-fixed: rgb(49 16 27);
    --md-sys-color-tertiary-fixed-dim: rgb(240 183 197);
    --md-sys-color-on-tertiary-fixed-variant: rgb(100 59 70);
    --md-sys-color-surface-dim: rgb(222 216 224);
    --md-sys-color-surface-bright: rgb(254 247 255);
    --md-sys-color-surface-container-lowest: rgb(255 255 255);
    --md-sys-color-surface-container-low: rgb(248 241 250);
    --md-sys-color-surface-container: rgb(242 236 244);
    --md-sys-color-surface-container-high: rgb(237 230 238);
    --md-sys-color-surface-container-highest: rgb(231 224 232);
"""

for line in md_colors.split("\n"):
    if line.strip():
        color = line.split(":")[0].strip()

        print(f"\"{color[15:]}\": \"var({color})\",")