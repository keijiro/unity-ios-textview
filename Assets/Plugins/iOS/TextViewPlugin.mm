#import <Foundation/Foundation.h>
#import <QuartzCore/QuartzCore.h>

extern UIViewController *UnityGetGLViewController();
extern UIView* UnityGetGLView();

namespace {
    UITextView *textView;
}

extern "C" void TextViewPluginInitialize() {
    if (textView == nil) {
        CGRect rect = UnityGetGLView().frame;
        const int kMargin = 8;
        rect.origin.x = kMargin;
        rect.origin.y = kMargin;
        rect.size.width -= kMargin * 2;
        rect.size.height -= kMargin * 2;
        
        textView = [[UITextView alloc] initWithFrame:rect];
        textView.editable = NO;
        textView.layer.cornerRadius = 5;
        textView.backgroundColor = [UIColor colorWithWhite:0.9f alpha:0.7f];
        textView.textColor = [UIColor colorWithWhite:0.0f alpha:1.0f];
        textView.font = [UIFont systemFontOfSize:16.0f];
    }
}

extern "C" void TextViewPluginSetPosition(int ox, int oy, int width, int height) {
    CGFloat scale = 1.0f / [UnityGetGLView() contentScaleFactor];
    textView.frame = CGRectMake(scale * ox, scale * oy, scale * width, scale * height);
}

extern "C" void TextViewPluginSetText(const char *string) {
    textView.text = [NSString stringWithUTF8String:string];
}

extern "C" void TextViewPluginSetFontSize(float size) {
    textView.font = [UIFont systemFontOfSize:size];
}

extern "C" void TextViewPluginSetTextColor(float r, float g, float b, float a) {
    textView.textColor = [UIColor colorWithRed:r green:g blue:b alpha:a];
}

extern "C" void TextViewPluginSetBackgroundColor(float r, float g, float b, float a) {
    textView.backgroundColor = [UIColor colorWithRed:r green:g blue:b alpha:a];
}

extern "C" void TextViewPluginShow(bool animate) {
    if (animate) {
        textView.alpha = 0.0f;
        [UnityGetGLView() addSubview:textView];
        [UIView animateWithDuration:0.2f
                         animations:^{
                             textView.alpha = 1.0f;
                         }];
    } else {
        [UnityGetGLView() addSubview:textView];
    }
}

extern "C" void TextViewPluginHide(bool animate) {
    if (animate) {
        [UIView animateWithDuration:0.2f
                         animations:^{
                             textView.alpha = 0.0f;
                         }
                         completion:^ (BOOL finished) {
                             if (finished)[textView removeFromSuperview];
                         }];
    } else {
        [textView removeFromSuperview];
    }
}
