package com.musicapp;

import android.graphics.Color;
import android.view.View;
import android.widget.TextView;

import androidx.annotation.NonNull;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.views.text.ReactTextView;

public class TextViewManager extends SimpleViewManager<View> {
    public static final String REACT_CLASS = "RCTViewTest";

    @NonNull
    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @NonNull
    @Override
    protected View createViewInstance(@NonNull ThemedReactContext reactContext) {
        View view = new View(reactContext);
        view.setBackgroundColor(Color.BLUE);
        return view;
    }
}
