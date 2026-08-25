---
title: Yearly Progress
subtitle: An time tracker app which provides beautiful widgets, which shows the progress of day, week, month and year.
description: An Android application that visualizes how much of the day, month, and year has passed, helping users maintain awareness of their time.
order: 3
featured: true
tech:
  - Android
  - Kotlin
  - MVVM
  - Room
  - Jetpack Compose
  - Material You
---


Yearly Progress provides beautifully designed widgets, for you to track progress of your day, week, month, and year directly from your home screen.  
  
You can track custom events and visualize day light and night light progress, making it a versatile tool for everyday use.  
  
Customize your homescreen with what you exactly want with various customization.

**Key Features**
  
- All-In-One Widget: A sleek widget that combines essential information, including the date, week, month, and year progress, all in one place. Perfect for decluttering your home screen while staying informed.  
- Custom Events Tracking: Keep track of your special milestones and personal events with ease. Whether it’s an important deadline or a meaningful celebration, Yearly Progress ensures you never lose sight of what matters most.  
- Daylight and Nightlight Progress: Visualize the natural rhythms of your day with widgets that display the progress of daylight and nightlight, providing a unique perspective on time.

#### How it is build?

It is written in Kotlin with [Jetpack compose](https://developer.android.com/compose) for building the UI of the app. For creating actual widgets it used android's remote views and build a widget guide to build it. There were several limitation with why working with Android widget that prevents it from updating the widget from real-time, you can learn more about how I get around this problem [using android's alarm manager.](/blog/bypassing-android-30-minute-widget-update-limit)