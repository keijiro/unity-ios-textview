unity-ios-textview
==================

This example project shows how to integrate UIKit with Unity.

How to build
------------

You can build the project with the usual steps. But there is a problem with the run loop handling in
the default AppController.mm. It stops Unity thread while interacting with the scroll view, and makes
the motion of scroll view glitchy.

For avoiding this problem, you have to modify AppController.mm with the following steps.

**1)** Change this code

    while (CFRunLoopRunInMode(kCFRunLoopDefaultMode, kInputProcessingTime, TRUE) == kCFRunLoopRunHandledSource)

to this.

    while (CFRunLoopRunInMode(CFStringRef(UITrackingRunLoopMode), kInputProcessingTime, YES) == kCFRunLoopRunHandledSource)

**2)** Change this code

    [_displayLink addToRunLoop:[NSRunLoop currentRunLoop] forMode:NSDefaultRunLoopMode];

to this.

    [_displayLink addToRunLoop:[NSRunLoop currentRunLoop] forMode:NSRunLoopCommonModes];
