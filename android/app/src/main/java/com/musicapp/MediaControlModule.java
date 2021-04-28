package com.musicapp;

import android.media.AudioManager;
import android.media.MediaPlayer;
import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.io.IOException;

public class MediaControlModule extends ReactContextBaseJavaModule {
    public MediaPlayer mediaPlayer;

    public MediaControlModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "MediaControlModule";
    }

    @ReactMethod
    public void play(String uri) {
        mediaPlayer = new MediaPlayer();

        mediaPlayer.setAudioStreamType(AudioManager.STREAM_MUSIC);

        try {
            mediaPlayer.setDataSource(uri);
            mediaPlayer.prepare();
            mediaPlayer.start();
        } catch (IOException e) {
            e.printStackTrace();
            Toast.makeText(getReactApplicationContext(), e.getMessage(), Toast.LENGTH_SHORT).show();
        }

        Toast.makeText(getReactApplicationContext(), "Đang phát...", Toast.LENGTH_SHORT).show();
    }

    @ReactMethod
    public void pause() {
        if (mediaPlayer.isPlaying()) {
            mediaPlayer.pause();
        }
    }
}
