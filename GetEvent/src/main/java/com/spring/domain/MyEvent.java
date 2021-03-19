package com.spring.domain;

public class MyEvent {
    private String Date;
    private String Even;

    public String getDate() {
        return Date;
    }

    public void setDate(String date) {
        Date = date;
    }

    public String getEven() {
        return Even;
    }

    public void setEven(String even) {
        Even = even;
    }

    @Override
    public String toString() {
        return "MyEvent{" +
                "Date='" + Date + '\'' +
                ", Even='" + Even + '\'' +
                '}';
    }
}
