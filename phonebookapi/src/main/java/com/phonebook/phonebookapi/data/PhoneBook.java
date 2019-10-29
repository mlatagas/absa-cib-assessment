package com.phonebook.phonebookapi.data;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="phone_book")
public class PhoneBook {

    @Id
    @GeneratedValue
    @Column(name="phone_book_id")
    private int id;

    @Column(name="name")
    private String name;

    @OneToMany(fetch = FetchType.EAGER,mappedBy="phoneBook",cascade = CascadeType.ALL)
    private Set<Entry> entryList;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Entry> getEntryList() {
        return entryList;
    }

    public void setEntryList(Set<Entry> entryList) {
        this.entryList = entryList;
    }
}
